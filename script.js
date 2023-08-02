// Chemin vers votre fichier ASCII
const asciiFilePath = "CV.txt";

// Fonction pour lire le fichier ASCII et animer le contenu
function loadAndType() {
  fetch(asciiFilePath)
    .then((response) => response.text())
    .then((asciiContent) => {
      let i = 0;

      function typeWriter() {
        if (i < asciiContent.length) {
          document.getElementById("ascii-content").innerHTML +=
            asciiContent.charAt(i);
          i++;
          setTimeout(typeWriter, 5); // Vous pouvez ajuster la vitesse de l'animation ici
        }
      }

      typeWriter();
    })
    .catch((error) => {
      console.error(
        "Une erreur est survenue lors de la lecture du fichier ASCII:",
        error
      );
    });
}

loadAndType();
