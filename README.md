# Portfolio Multimédia Interactif

## Vue d'ensemble
Collection de projets interconnectés formant un portfolio professionnel, mêlant hardware, software et réalité augmentée. Le portfolio se compose de trois éléments principaux :
- Une carte de visite électronique PCB
- Un CV ASCII avec QR codes
- Une interface de navigation en réalité augmentée

## 1. Carte de Visite Électronique PCB

### Description
Carte de visite au format PCB basée sur un microcontrôleur ATtiny85, intégrant :
- Interface USB HID (émulation clavier AZERTY)
- Animation LED RGB sur 8 LEDs WS2812B
- Ecriture des informations de contact
- Design compact et professionnel

### Caractéristiques Techniques
- Microcontrôleur : ATtiny85 (16.5 MHz)
- 8 LEDs WS2812B adressables individuellement
- Alimentation via USB
- Support complet du clavier AZERTY français
- Animation rainbow LED automatique

### Fonctionnement
1. Connexion en USB (plug & play)
2. Activer 3 fois CAPS LOCK dans un éditeur de texte
3. La carte écrit automatiquement mes informations de contact
4. Animation LED rainbow continue

## 2. CV Interactif

### Description
- CV au format ASCII art
- Design rétro-futuriste
- Timeline détaillée des formations/expériences/compétances
- QR code intégré menant vers mon bio.link

### Contenu
- Présentation professionnelle complète
- Parcours académique et professionnel
- Compétences techniques détaillées
- Projets personnels et professionnels

## 3. Interface AR (Réalité Augmentée)

### Description
Interface de navigation en réalité augmentée accessible via QR code :
- Barre de navigation interactive
- Liens vers différentes plateformes :
  - CV complet
  - Email
  - GitHub
  - Instagram
- Design épuré et responsive

### Fonctionnalités
- Navigation intuitive
- Intégration multiplateforme
- Accès rapide aux informations de contact
- Expérience utilisateur immersive
- Intégration de modèles 3D et d'un scan Gaussian Splatting

### Instructions AR.html
1. Scanner le QR code (QR/QR_AR.png) avec votre smartphone
2. Accéder à l'interface AR, autorisez les accès
3. Pointez la caméra vers la mire AR située au milieu du QRcode

## Technologies Utilisées

### Hardware
- ATtiny85
- LEDs WS2812B
- PCB custom

### Software
- C/C++ (firmware PCB)
- V-USB (émulation USB)
- Adafruit NeoPixel (contrôle LED)

### Software, Frameworks et Bibliothèques
- C/C++ (firmware PCB)
- V-USB (émulation USB)
- Adafruit NeoPixel (contrôle LED)
- AR.js (AR)
- Three.js (AR)
- Python (Génération QRcode avec logo)
- [aframe-gaussian-splatting-component](https://github.com/quadjr/aframe-gaussian-splatting)

## Liens
- CV en ligne : https://guigpap.github.io/CV/index.html
- Demo AR Gaussian Splatting : https://guigpap.github.io/CV/AR.html

## Contributions et Développement
Le projet est en constante évolution. Les contributions et suggestions sont bienvenues pour améliorer :
- L'expérience utilisateur
- Les animations LED
- L'interface AR
- L'intégration de nouvelles fonctionnalités

## Licence
Ce projet est sous licence GNU GPL v2/v3, sauf mention contraire spécifique.

## Contact
Pour toute question ou collaboration :
- Email : guillaume.parrat@gmail.com
- Instagram (Portfolio) : https://www.instagram.com/guig_pap/
- Portfolio interactif : en cours de réalisation