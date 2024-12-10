/* USB PCB Business Card
 * License: GNU GPL v2 (see License.txt), GNU GPL v3 or proprietary (CommercialLicense.txt)
 */
 
// please see http://www.frank-zhao.com/card/
// note, for ATtiny MCUs, fuses -U lfuse:w:0xE1:m -U hfuse:w:0xDF:m -U efuse:w:0xFF:m -U lock:w:0xFF:m
// note, write to ATtiny at a low ISP frequency

// keyboard layout modified + added WS2812 animation

// required avr-libc modules
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include <avr/wdt.h>
#include <avr/pgmspace.h>
#include <avr/eeprom.h>
#include <stdio.h>

// Ajout des includes pour WS2812B
#include <Adafruit_NeoPixel.h>

// Configuration WS2812B
#define LED_PIN PB4
#define NUM_LEDS 8
#define LED_UPDATE_DELAY 50
#define BRIGHTNESS 127

// Instance NeoPixel
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);

// Variables pour l'animation rainbow
uint16_t rainbow_hue = 0;
uint8_t rainbow_active = 0;

// configure settings for V-USB then include the V-USB driver
#include "usbconfig.h"
#include "usbdrv/usbdrv.h"

// compilation settings check
#if defined(__AVR_ATtiny85__) || defined(__AVR_ATtiny45__) || defined(__AVR_ATtiny25__)
#if F_CPU != 16500000
#error "ATtiny MCU used but not at 16.5 KHz"
#endif
#else
#if F_CPU != 12000000
#error "Clock speed is not 12 KHz"
#endif
#endif

// USB HID report descriptor for boot protocol keyboard
PROGMEM char usbHidReportDescriptor[USB_CFG_HID_REPORT_DESCRIPTOR_LENGTH] = {
    0x05, 0x01,                    // USAGE_PAGE (Generic Desktop)
    0x09, 0x06,                    // USAGE (Keyboard)
    0xa1, 0x01,                    // COLLECTION (Application)
    0x75, 0x01,                    //   REPORT_SIZE (1)
    0x95, 0x08,                    //   REPORT_COUNT (8)
    0x05, 0x07,                    //   USAGE_PAGE (Keyboard)(Key Codes)
    0x19, 0xe0,                    //   USAGE_MINIMUM (Keyboard LeftControl)(224)
    0x29, 0xe7,                    //   USAGE_MAXIMUM (Keyboard Right GUI)(231)
    0x15, 0x00,                    //   LOGICAL_MINIMUM (0)
    0x25, 0x01,                    //   LOGICAL_MAXIMUM (1)
    0x81, 0x02,                    //   INPUT (Data,Var,Abs) ; Modifier byte
    0x95, 0x01,                    //   REPORT_COUNT (1)
    0x75, 0x08,                    //   REPORT_SIZE (8)
    0x81, 0x03,                    //   INPUT (Cnst,Var,Abs) ; Reserved byte
    0x95, 0x05,                    //   REPORT_COUNT (5)
    0x75, 0x01,                    //   REPORT_SIZE (1)
    0x05, 0x08,                    //   USAGE_PAGE (LEDs)
    0x19, 0x01,                    //   USAGE_MINIMUM (Num Lock)
    0x29, 0x05,                    //   USAGE_MAXIMUM (Kana)
    0x91, 0x02,                    //   OUTPUT (Data,Var,Abs) ; LED report
    0x95, 0x01,                    //   REPORT_COUNT (1)
    0x75, 0x03,                    //   REPORT_SIZE (3)
    0x91, 0x03,                    //   OUTPUT (Cnst,Var,Abs) ; LED report padding
    0x95, 0x06,                    //   REPORT_COUNT (6)
    0x75, 0x08,                    //   REPORT_SIZE (8)
    0x15, 0x00,                    //   LOGICAL_MINIMUM (0)
    0x25, 0x65,                    //   LOGICAL_MAXIMUM (101)
    0x05, 0x07,                    //   USAGE_PAGE (Keyboard)(Key Codes)
    0x19, 0x00,                    //   USAGE_MINIMUM (Reserved (no event indicated))(0)
    0x29, 0x65,                    //   USAGE_MAXIMUM (Keyboard Application)(101)
    0x81, 0x00,                    //   INPUT (Data,Ary,Abs)
    0xc0                           // END_COLLECTION
};

// data structure for boot protocol keyboard report
typedef struct {
    uint8_t modifier;
    uint8_t reserved;
    uint8_t keycode[6];
} keyboard_report_t;

// global variables
static keyboard_report_t keyboard_report;
#define keyboard_report_reset() keyboard_report.modifier=0;keyboard_report.reserved=0;keyboard_report.keycode[0]=0;keyboard_report.keycode[1]=0;keyboard_report.keycode[2]=0;keyboard_report.keycode[3]=0;keyboard_report.keycode[4]=0;keyboard_report.keycode[5]=0;
static uint8_t idle_rate = 500 / 4;
static uint8_t protocol_version = 0;
static uint8_t LED_state = 0;
static uint8_t blink_count = 0;

// Fonction pour l'animation rainbow
void rainbow_update() {
    if (!rainbow_active) {
        // Si l'animation n'est pas active, on éteint toutes les LEDs
        strip.clear();
        strip.show();
        return;
    }
    
    for(uint16_t i=0; i < strip.numPixels(); i++) {
        uint16_t pixel_hue = rainbow_hue + (i * 65536L / strip.numPixels());
        strip.setPixelColor(i, strip.gamma32(strip.ColorHSV(pixel_hue)));
    }

    strip.show();
    
    rainbow_hue += 256;
    if (rainbow_hue >= 65536) {
        rainbow_hue = 0;
    }
}


usbMsgLen_t usbFunctionSetup(uint8_t data[8]) {
    usbRequest_t *rq = (void *)data;

    if ((rq->bmRequestType & USBRQ_TYPE_MASK) != USBRQ_TYPE_CLASS)
        return 0;

    switch (rq->bRequest) {
        case USBRQ_HID_GET_IDLE:
            usbMsgPtr = &idle_rate;
            return 1;
        case USBRQ_HID_SET_IDLE:
            idle_rate = rq->wValue.bytes[1];
            return 0;
        case USBRQ_HID_GET_PROTOCOL:
            usbMsgPtr = &protocol_version;
            return 1;
        case USBRQ_HID_SET_PROTOCOL:
            protocol_version = rq->wValue.bytes[1];
            return 0;
        case USBRQ_HID_GET_REPORT:
            usbMsgPtr = &keyboard_report;
            return sizeof(keyboard_report);
        case USBRQ_HID_SET_REPORT:
            if (rq->wLength.word == 1) {
                return USB_NO_MSG;
            } else {
                return 0;
            }
        default:
            return 0;
    }
}

usbMsgLen_t usbFunctionWrite(uint8_t * data, uchar len) {
    if (data[0] != LED_state) {
        blink_count = blink_count < 10 ? blink_count + 1 : blink_count;
        
        // Activation de l'animation rainbow quand blink_count > 2
        if (blink_count > 2) {
            rainbow_active = 1;
        } else {
            rainbow_active = 0;
        }
    }
    
    LED_state = data[0];
    return 1;
}

#if defined(__AVR_ATtiny85__) || defined(__AVR_ATtiny45__) || defined(__AVR_ATtiny25__)
static void calibrateOscillator(void) {
    uchar step = 128;
    uchar trialValue = 0, optimumValue;
    int x, optimumDev, targetValue = (unsigned)(1499 * (double)F_CPU / 10.5e6 + 0.5);

    do {
        OSCCAL = trialValue + step;
        x = usbMeasureFrameLength();
        if(x < targetValue)
            trialValue += step;
        step >>= 1;
    } while(step > 0);

    optimumValue = trialValue;
    optimumDev = x;
    for(OSCCAL = trialValue - 1; OSCCAL <= trialValue + 1; OSCCAL++) {
        x = usbMeasureFrameLength() - targetValue;
        if(x < 0)
            x = -x;
        if(x < optimumDev) {
            optimumDev = x;
            optimumValue = OSCCAL;
        }
    }
    OSCCAL = optimumValue;
}

void usbEventResetReady(void) {
    calibrateOscillator();
    eeprom_update_byte(0, OSCCAL);
}
#endif

void ASCII_to_keycode(uint8_t ascii) {
    keyboard_report.keycode[0] = 0x00;
    keyboard_report.modifier = 0x00;
    
    // Lettres majuscules
    if (ascii >= 'A' && ascii <= 'Z') {
        switch (ascii) {
            case 'A': keyboard_report.keycode[0] = 0x04; break;
            case 'B': keyboard_report.keycode[0] = 0x05; break;
            case 'C': keyboard_report.keycode[0] = 0x06; break;
            case 'D': keyboard_report.keycode[0] = 0x07; break;
            case 'E': keyboard_report.keycode[0] = 0x08; break;
            case 'F': keyboard_report.keycode[0] = 0x09; break;
            case 'G': keyboard_report.keycode[0] = 0x0A; break;
            case 'H': keyboard_report.keycode[0] = 0x0B; break;
            case 'I': keyboard_report.keycode[0] = 0x0C; break;
            case 'J': keyboard_report.keycode[0] = 0x0D; break;
            case 'K': keyboard_report.keycode[0] = 0x0E; break;
            case 'L': keyboard_report.keycode[0] = 0x0F; break;
            case 'M': keyboard_report.keycode[0] = 0x33; break;
            case 'N': keyboard_report.keycode[0] = 0x11; break;
            case 'O': keyboard_report.keycode[0] = 0x12; break;
            case 'P': keyboard_report.keycode[0] = 0x13; break;
            case 'Q': keyboard_report.keycode[0] = 0x14; break;
            case 'R': keyboard_report.keycode[0] = 0x15; break;
            case 'S': keyboard_report.keycode[0] = 0x16; break;
            case 'T': keyboard_report.keycode[0] = 0x17; break;
            case 'U': keyboard_report.keycode[0] = 0x18; break;
            case 'V': keyboard_report.keycode[0] = 0x19; break;
            case 'W': keyboard_report.keycode[0] = 0x1A; break;
            case 'X': keyboard_report.keycode[0] = 0x1B; break;
            case 'Y': keyboard_report.keycode[0] = 0x1C; break;
            case 'Z': keyboard_report.keycode[0] = 0x1D; break;
        }
        keyboard_report.modifier = bit_is_set(LED_state, 1) ? 0x00 : _BV(1);
    }
    
    // Lettres minuscules
    else if (ascii >= 'a' && ascii <= 'z') {
        switch (ascii) {
            case 'a': keyboard_report.keycode[0] = 0x04; break;
            case 'b': keyboard_report.keycode[0] = 0x05; break;
            case 'c': keyboard_report.keycode[0] = 0x06; break;
            case 'd': keyboard_report.keycode[0] = 0x07; break;
            case 'e': keyboard_report.keycode[0] = 0x08; break;
            case 'f': keyboard_report.keycode[0] = 0x09; break;
            case 'g': keyboard_report.keycode[0] = 0x0A; break;
            case 'h': keyboard_report.keycode[0] = 0x0B; break;
            case 'i': keyboard_report.keycode[0] = 0x0C; break;
            case 'j': keyboard_report.keycode[0] = 0x0D; break;
            case 'k': keyboard_report.keycode[0] = 0x0E; break;
            case 'l': keyboard_report.keycode[0] = 0x0F; break;
            case 'm': keyboard_report.keycode[0] = 0x33; break;
            case 'n': keyboard_report.keycode[0] = 0x11; break;
            case 'o': keyboard_report.keycode[0] = 0x12; break;
            case 'p': keyboard_report.keycode[0] = 0x13; break;
            case 'q': keyboard_report.keycode[0] = 0x14; break;
            case 'r': keyboard_report.keycode[0] = 0x15; break;
            case 's': keyboard_report.keycode[0] = 0x16; break;
            case 't': keyboard_report.keycode[0] = 0x17; break;
            case 'u': keyboard_report.keycode[0] = 0x18; break;
            case 'v': keyboard_report.keycode[0] = 0x19; break;
            case 'w': keyboard_report.keycode[0] = 0x1A; break;
            case 'x': keyboard_report.keycode[0] = 0x1B; break;
            case 'y': keyboard_report.keycode[0] = 0x1C; break;
            case 'z': keyboard_report.keycode[0] = 0x1D; break;
        }
        keyboard_report.modifier = bit_is_set(LED_state, 1) ? _BV(1) : 0x00;
    }
    
    // Chiffres et caractères spéciaux
    else {
        switch (ascii) {
            // Première rangée sans modificateur
            case '&': keyboard_report.keycode[0] = 0x1E; break;  // 1
            case 'é': keyboard_report.keycode[0] = 0x1F; break;  // 2
            case '"': keyboard_report.keycode[0] = 0x20; break;  // 3
            case '\'': keyboard_report.keycode[0] = 0x21; break; // 4
            case '(': keyboard_report.keycode[0] = 0x22; break;  // 5
            case '-': keyboard_report.keycode[0] = 0x23; break;  // 6
            case 'è': keyboard_report.keycode[0] = 0x24; break;  // 7
            case '_': keyboard_report.keycode[0] = 0x25; break;  // 8
            case 'ç': keyboard_report.keycode[0] = 0x26; break;  // 9
            case 'à': keyboard_report.keycode[0] = 0x27; break;  // 0
            case ')': keyboard_report.keycode[0] = 0x2D; break;  // -
            case '=': keyboard_report.keycode[0] = 0x2E; break;  // =

            // Première rangée avec Shift
            case '1': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x1E; 
                break;
            case '2': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x1F; 
                break;
            case '3': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x20; 
                break;
            case '4': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x21; 
                break;
            case '5': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x22; 
                break;
            case '6': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x23; 
                break;
            case '7': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x24; 
                break;
            case '8': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x25; 
                break;
            case '9': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x26; 
                break;
            case '0': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x27; 
                break;
            case '°': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x2D; 
                break;
            case '+': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x2E; 
                break;

            // Caractères AltGr (rangée du haut)
            case '~':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x1F; // 2
                break;
            case '#':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x20; // 3
                break;
            case '{':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x21; // 4
                break;
            case '[':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x22; // 5
                break;
            case '|':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x23; // 6
                break;
            case '`':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x24; // 7
                break;
            case '\\':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x25; // 8
                break;
            case '^':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x26; // 9
                break;
            case '@':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x27; // 0
                break;
            case ']':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x2D; // -
                break;
            case '}':
                keyboard_report.modifier = _BV(2);
                keyboard_report.keycode[0] = 0x2E; // =
                break;

            // Ponctuation standard
            case ',': keyboard_report.keycode[0] = 0x36; break;
            case ';': keyboard_report.keycode[0] = 0x37; break;
            case ':': keyboard_report.keycode[0] = 0x38; break;
            case '!': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x38; 
                break;
            case '.': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x37; 
                break;
            case '/': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x36; 
                break;
            case '?': 
                keyboard_report.modifier = _BV(1);
                keyboard_report.keycode[0] = 0x34; 
                break;

            // Caractères de base
            case ' ': keyboard_report.keycode[0] = 0x2C; break;  // Espace
            case '\t': keyboard_report.keycode[0] = 0x2B; break; // Tab
            case '\n': keyboard_report.keycode[0] = 0x28; break; // Enter
        }
    }
}

void send_report_once() {
    while (1) {
        usbPoll();
        if (usbInterruptIsReady()) {
            usbSetInterrupt(&keyboard_report, sizeof(keyboard_report));
            break;
        }
    }
}

// stdio's stream will use this funct to type out characters in a string
void type_out_char(uint8_t ascii, FILE *stream) {
    ASCII_to_keycode(ascii);
    send_report_once();
    keyboard_report_reset();
    send_report_once();
}

static FILE mystdout = FDEV_SETUP_STREAM(type_out_char, NULL, _FDEV_SETUP_WRITE);

// Fonction pour initialiser le timer pour les LEDs
void timer_init() {
    // Configure Timer0 pour une interruption périodique
    TCCR0A = (1 << WGM01);             // Mode CTC
    TCCR0B = (1 << CS01) | (1 << CS00); // Prescaler 64
    OCR0A = F_CPU / 64 / 1000;         // Pour avoir ~1ms
    TIMSK |= (1 << OCIE0A);            // Active l'interruption Compare Match A
}

// Interruption du timer pour les LEDs
ISR(TIMER0_COMPA_vect) {
    static uint16_t led_counter = 0;
    
    led_counter++;
    if (led_counter >= LED_UPDATE_DELAY) {
        led_counter = 0;
        if (rainbow_active) {
            rainbow_update();
        }
    }
}

int main() {
    #if defined(__AVR_ATtiny85__) || defined(__AVR_ATtiny45__) || defined(__AVR_ATtiny25__)
    uint8_t calibrationValue = eeprom_read_byte(0);
    if (calibrationValue != 0xFF) {
        OSCCAL = calibrationValue;
    }
    #endif
    
    // Initialisation des LEDs WS2812B
    strip.begin();
    strip.clear();
    strip.show();
    strip.setBrightness(BRIGHTNESS);
    
    // Initialisation du timer pour les LEDs
    timer_init();
    
    stdout = &mystdout;
    keyboard_report_reset();
    wdt_disable();
    
    usbDeviceDisconnect();
    _delay_ms(250);
    usbDeviceConnect();
    
    usbInit();
    sei();
    
    while (1) {
        if (blink_count > 2) {
            puts_P(PSTR("Guillaume PARRAT\nEmail: guillaume.parrat@gmail.com\nMaker - Ingenieur microelectronique - Artiste 2D/3D\nSite Web: https://guigpap.github.io/CV/"));
            blink_count = 0;
        }
        
        usbPoll();
    }
    
    return 0;
}