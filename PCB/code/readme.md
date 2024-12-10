# Carte de Visite USB avec Animation LED

## Description
Carte de visite électronique basée sur un ATtiny85 qui se comporte comme un périphérique USB HID (clavier) et intègre une animation LED RGB. Lorsqu'elle est connectée à un port USB, elle écrit automatiquement les informations de contact après activation et affiche une animation lumineuse sur les LEDs WS2812B intégrées.

## Caractéristiques
- Émulation clavier USB (Layout AZERTY français)
- Animation RGB sur 8 LEDs WS2812B
- Activation automatique via CAPS LOCK
- Ultra compact (format carte de visite)
- Alimenté par USB
- Support complet des caractères spéciaux français

## Hardware Requis
- Microcontrôleur ATtiny85
- 8 LEDs WS2812B
- Connecteur USB
- Condensateurs et résistances de support
- PCB dédié

## Spécifications Techniques

### Configuration ATtiny85
- Fréquence : 16.5 MHz
- Fusibles : 
  - lfuse : 0xE1
  - hfuse : 0xDF
  - efuse : 0xFF
  - lock  : 0xFF

### Configuration des Pins
- PB4 : Ligne de données WS2812B
- USB D+ : PB3
- USB D- : PB4
- VCC : 5V (USB)
- GND : Masse (USB)

## Fonctionnalités Détaillées

### Comportement du Clavier
1. La carte apparaît comme un clavier USB standard
2. Support complet du layout AZERTY français incluant :
   - Caractères accentués (é, è, à, ç)
   - Caractères spéciaux AltGr (@, #, {, [, |, etc.)
   - Ponctuation française
   - Chiffres et symboles

### Animation LED
- Séquence rainbow sur les 8 LEDs WS2812B
- Luminosité réglée à 50% pour économie d'énergie
- Animation non-bloquante via interruption timer
- Démarre après l'activation du mode écriture

### Séquence d'Activation
1. Connecter la carte à un port USB
2. Appuyer sur CAPS LOCK trois fois
3. La carte écrit automatiquement les informations
4. L'animation LED démarre et continue en boucle

### Information Écrite
```
Guillaume PARRAT
Email: guillaume.parrat@gmail.com
Maker - Ingenieur microelectronique - Artiste 2D/3D
Site Web: https://guigpap.github.io/CV/
```

## Compilation et Programmation

### Prérequis
1. AVR-GCC (compilateur)
2. AVRDUDE (programmateur)
3. Librairies requises :
   - V-USB
   - Adafruit NeoPixel
   - AVR Libc

### Instructions de Compilation
```bash
# Compiler le projet
make clean
make all

# Programmer l'ATtiny85
avrdude -c <programmateur> -p t85 -U flash:w:main.hex

# Configurer les fusibles
avrdude -c <programmateur> -p t85 -U lfuse:w:0xE1:m -U hfuse:w:0xDF:m -U efuse:w:0xFF:m -U lock:w:0xFF:m
```

## Consommation Électrique
- Alimentation : USB 5V
- Consommation max (toutes LEDs allumées) : ~160mA
- LEDs limitées à 50% de luminosité : ~80mA max

## Dépannage

### Problèmes USB
- Vérifier les fusibles de l'ATtiny85
- Contrôler la calibration de l'oscillateur
- Vérifier les connexions D+/D-

### Problèmes LED
- Vérifier l'alimentation (USB doit fournir suffisamment de courant)
- Contrôler la connexion des LEDs
- Vérifier la résistance sur la ligne de données

### Problèmes de Frappe
- Vérifier que le système reconnaît bien un clavier
- Contrôler que CAPS LOCK fonctionne
- Vérifier le layout clavier du système

## Limitations Connues
- La carte doit être reprogrammée pour changer les informations
- L'animation LED ne peut pas être arrêtée sans déconnecter
- Certains caractères spéciaux peuvent ne pas fonctionner sur certains systèmes

## Licence
Ce projet est basé sur le travail original de Frank Zhao et est sous licence :
- GNU GPL v2
- GNU GPL v3
- ou propriétaire (voir CommercialLicense.txt)

## Crédits
- Concept original par Frank Zhao
- Modifications par Guillaume PARRAT
- Utilise V-USB pour l'émulation USB
- Utilise Adafruit_NeoPixel pour le contrôle LED

