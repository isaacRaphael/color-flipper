const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector('body')

btn.addEventListener("click", () => {
    
  let hexColor = "#";

  while (hexColor.length <= 6) {
    hexColor += hexArray[generateRandomNumber()]
  }


  color.textContent = hexColor;
  body.style.backgroundColor = hexColor;
});

function generateRandomNumber() {
  return Math.floor(Math.random() * hexArray.length);
}