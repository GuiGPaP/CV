// Path to your ASCII file
const asciiFilePath = "CV.txt";

// Function to read the ASCII file and animate the content
function loadAndType() {
  fetch(asciiFilePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((asciiContent) => {
      let i = 0;

      function typeWriter() {
        if (i < asciiContent.length) {
          document.getElementById("ascii-content").innerHTML +=
            asciiContent.charAt(i);
          i++;
          setTimeout(typeWriter, 2); // You can adjust the speed of the animation here
        }
      }

      typeWriter();
    })
    .catch((error) => {
      console.error("An error occurred while reading the ASCII file:", error);
    });
}

loadAndType();
