const colorArray = ["green", "red", "rgb(133, 122, 200)", "#f15025"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")
const body = document.querySelector('body')


button.addEventListener("click", () =>  {
  
  const randomNumber = generateRandomNumber()

  //conditional logic to avoid changing to the same color due to randomly generating the same number
  if (colorArray[randomNumber] === body.style.backgroundColor){
    body.style.backgroundColor = colorArray[randomNumber + 1]
    color.textContent = colorArray[randomNumber + 1]
  } else {
      body.style.backgroundColor = colorArray[randomNumber]
      color.textContent = colorArray[randomNumber]
  }

  
  
 
})

function generateRandomNumber() {
  return Math.floor(Math.random() * colorArray.length)
}