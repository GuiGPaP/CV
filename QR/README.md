# QR Code Generator avec Logo Personnalisé

## Description
Script Python permettant de générer des QR codes personnalisés avec la possibilité d'ajouter un logo au centre. Le script propose une interface en ligne de commande interactive pour personnaliser les QR codes selon vos besoins.

## Fonctionnalités
- Génération de QR codes basiques ou avec logo
- Personnalisation de la couleur du QR code
- Maintien des proportions originales du logo
- Adaptation automatique de la taille du QR code en fonction du logo
- Correction d'erreur de niveau H pour une meilleure lisibilité
- Support des URLs et du texte libre

## Prérequis
- Python 3.x
- PIL (Python Imaging Library)
- qrcode

## Installation

1. Installez les dépendances nécessaires :
```bash
pip install pillow qrcode
```

2. Clonez ou téléchargez le script dans votre répertoire de travail.

## Utilisation

1. Lancez le script :
```bash
python qr.py
```

2. Suivez les instructions interactives :

### Sans Logo
```
Voulez-vous ajouter un logo à votre QRcode ? :
0 = non ; 1 = oui
> 0

OK, pas de logo

Tapez l'adresse complète avec https:// ou le texte voulu :
> https://example.com

Quelles couleur voulez-vous ?
Orange, Black, White, ... ???
> Black

Tapez le nom voulu (sans extention) pour le fichier PNG du QR-code :
> mon_qr_code
```

### Avec Logo
```
Voulez-vous ajouter un logo à votre QRcode ? :
0 = non ; 1 = oui
> 1

notez le chemin du fichier image
> chemin/vers/votre/logo.png

Tapez l'adresse complète avec https:// ou le texte voulu :
> https://example.com

Quelle couleur voulez-vous ?
orange, black, white, ... ???
> orange

Tapez le nom voulu (sans extention) pour le fichier PNG du QR-code :
> mon_qr_code_avec_logo
```

## Caractéristiques Techniques

### Paramètres du QR Code
- Version : Automatique
- Niveau de correction d'erreur : H (le plus haut)
- Taille des modules : 10 pixels
- Bordure : 4 modules

### Gestion du Logo
- Taille du QR code : 4 fois la taille du logo
- Positionnement : Centré automatiquement
- Format d'image supporté : Tous les formats supportés par PIL

## Structure du Code

Le script est organisé en deux branches principales :
1. Génération avec logo
   - Charge l'image du logo
   - Calcule les dimensions optimales
   - Génère le QR code avec espace réservé
   - Fusionne le logo et le QR code

2. Génération sans logo
   - Génération directe du QR code
   - Application de la couleur choisie

## Personnalisation

Le script a été modifié pour :
- Changer le ratio de taille QR code/logo (actuellement 4:1)
- Modifier la taille des modules (actuellement 10 pixels)
- Ajuster la bordure (actuellement 4 modules)
- Modifier le niveau de correction d'erreur

## Note
Ce script est basé sur une implémentation de GeeksforGeeks, modifiée pour conserver la taille originale du logo et optimiser le positionnement.

## Dépannage

1. Si le QR code n'est pas lisible :
   - Réduisez la taille du logo
   - Utilisez des couleurs plus contrastées

2. Si le logo apparaît déformé :
   - Vérifiez le format de l'image source
   - Utilisez une image avec des proportions équilibrées (1:1)
