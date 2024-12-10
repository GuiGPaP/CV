#!/usr/bin/python3
# -*- coding: utf-8 -*

# Script d'origine :
# https://www.geeksforgeeks.org/how-to-generate-qr-codes-with-a-custom-logo-using-python/

# Modifications pour que le logo soit à taille originale

# import modules
import qrcode
from PIL import Image

Logo_added = int(input("Voulez-vous ajouter un logo à votre QRcode ? :\n 0 = non ; 1 = oui\n"))

# Generating QRcode and Adding an image in the QR code center
if Logo_added > 0:
    Logo_link = input("notez le chemin du fichier image\n")
    logo = Image.open(Logo_link)
    
    # On garde la taille originale du logo
    logo_size = logo.size
    
    # On crée un QR code plus grand pour accommoder le logo
    # Le QR code sera 4 fois plus grand que le logo pour assurer la lisibilité
    qr_size = max(logo_size) * 4
    
    QRcode = qrcode.QRCode(
        version=None,  # On laisse le QR code déterminer sa version automatiquement
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,  # Taille de chaque "pixel" du QR code
        border=4,     # Bordure autour du QR code
    )
    
    # taking url or text
    url = input("Tapez l'adresse complète avec https:// ou le texte voulu :\n")
    
    # adding URL or text to QRcode
    QRcode.add_data(url)
    
    # generating QR code
    QRcode.make(fit=True)
    
    # taking color name from user
    QRcolor = input("Quelle couleur voulez-vous ?\norange, black, white, ... ???\n")
    
    # adding color to QR code
    QRimg = QRcode.make_image(
        fill_color=QRcolor, back_color="White").convert('RGB')
    
    # Redimensionner le QR code pour qu'il soit proportionnel au logo
    QRimg = QRimg.resize((qr_size, qr_size), Image.LANCZOS)
    
    # Calculer la position centrale pour le logo
    pos = ((QRimg.size[0] - logo.size[0]) // 2,
           (QRimg.size[1] - logo.size[1]) // 2)
    
    # Coller le logo au centre du QR code
    QRimg.paste(logo, pos)
    
    # save the QR code generated
    name_wanted = input("Tapez le nom voulu (sans extention) pour le fichier PNG du QR-code :\n")
    name_out = name_wanted + '.png'
    QRimg.save(name_out)
    print('QR code generated!')

# Generating QRcode without image
else:
    print("OK, pas de logo\n")
    QRcode = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H
    )
    url = input("Tapez l'adresse complète avec https:// ou le texte voulu :\n")
    QRcode.add_data(url)
    QRcode.make()
    QRcolor = input("Quelles couleur voulez-vous ?\nOrange, Black, White, ... ???\n")
    QRimg = QRcode.make_image(
        fill_color=QRcolor, back_color="White").convert('RGB')
    name_wanted = input("Tapez le nom voulu (sans extention) pour le fichier PNG du QR-code :\n")
    name_out = name_wanted + '.png'
    QRimg.save(name_out)
    print('QR code generated!')