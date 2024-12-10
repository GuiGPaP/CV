
# Carte de Visite PCB avec ATTiny85

Cette carte de visite au format PCB est un projet innovant combinant électronique et interactivité. Elle se base sur un microcontrôleur ATTiny85 et propose des fonctionnalités personnalisées, telles que le NFC, des LED programmables, et une compatibilité HID pour le clavier.

## Fonctionnalités

- **Microcontrôleur ATTiny85** : au cœur de la carte, il gère toutes les opérations.
- **NFC intégré** : pour transmettre mes informations de contact via une communication sans fil.
- **LED RGB (WS2812B)** : pour des effets visuels attractifs.
- **Comportement HID clavier** : lorsqu'elle est branchée sur un PC, la carte s'identifie comme un périphérique clavier. Après avoir ouvert le Bloc-notes puis appuyé trois fois sur la touche Shift, elle saisit mes coordonnées.

## Utilisation

1. **Brancher la carte** sur un port USB de votre ordinateur.
2. **Lancer le bloc-notes** ou toute autre application de traitement de texte.
3. **Appuyer trois fois sur la touche Shift** pour activer la carte.
4. Affichage de mes coordonnées pré-programmées, et animation LED.

## Inspirations

Ce projet s'inspire en partie de [ce projet GitHub pour la partie NFC](https://github.com/anthonykouttron/pcb-business-card-qr-nfc) et [ce projet Instructables pour V-USB](https://www.instructables.com/USB-PCB-Business-Card/)

## Liste des Composants (BOM)

Voici un aperçu des principaux composants utilisés dans la carte de visite PCB :

| ID  | Nom / Value         | Designator                                | Quantité | Référence Fabricant       | Fabricant       |
|-----|---------------------|-------------------------------------------|----------|---------------------------|-----------------|
| 1   | ATTiny85            | U1                                        | 1        | ATTINY85-20PU             | Microchip       |
| 2   | WS2812B-4020        | LED1,LED2,LED3,LED4,LED5,LED6,LED15,LED16 | 8        | WS2812B-4020              | Worldsemi       |
| 3   | NT3H1101W0FHKH      | NFC Module                                | 1        | NT3H1101W0FHKH            | NXP Semiconductors |


*Note : Vous pouvez trouver la BOM complète dans le fichier joint.*

## Animation de la Carte

![Animation de la Carte](card.gif)

Cette animation illustre le design et les fonctionnalités visuelles de la carte.

## Développement

Le code pour le comportement HID et les effets LED est écrit en C, en utilisant l'environnement Arduino compatible avec l'ATTiny85. Si vous souhaitez personnaliser votre carte, vous pouvez éditer et flasher le firmware.

## Auteurs

Ce projet a été conçu par un passionné d'électronique, pour les passionnés d'électronique, avec une attention particulière portée à l'esthétique et à la praticité.

---

### Liens Utiles

- [Documentation officielle ATTiny85](https://www.microchip.com/en-us/product/ATTiny85)
- [Datasheet WS2812B-4020](https://www.lcsc.com/datasheet/lcsc_datasheet_2412021803_Worldsemi-WS2812B-4020_C965557.pdf)
- [V-USB](https://obdev.at/products/vusb/index.html)