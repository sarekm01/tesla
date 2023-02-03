const lists = document.querySelectorAll(".collections li")
const h1Section = document.querySelector(".section h1")
const pSection = document.querySelector(".section p")
const body = document.querySelector("body")

const changeImg = () => {
for(let i = 0; i < lists.length; i++){
    lists[i].classList.remove("lists")
    console.log(lists[i]);
}
}
for (let i = 0; i < lists.length; i++){
lists[i].addEventListener("click", function (){
 changeImg()
 lists[i].classList.add("lists")
 if(lists[i].querySelector(".ok")){
    h1Section.innerText = "Model S"
    pSection.innerText = "Plaid"
    body.style.backgroundImage = "url('./first_car.jpeg')"
    body.style.color = "black"
 } else if (lists[i].querySelector(".ok2")){
    h1Section.innerText = "Model 3"
    pSection.innerText = "Schedule a Demo"
    body.style.backgroundImage = "url('./second_car.jpeg')"
    body.style.color = "white"
 } else if (lists[i].querySelector(".ok3")){
    h1Section.innerText = "Model X"
    pSection.innerText = "Plaid"
    body.style.backgroundImage = "url('./third_car.jpeg')"
    body.style.color = "black"
 } else if (lists[i].querySelector(".ok4")){
    h1Section.innerText = "Model Y"
    pSection.innerText = "Schedule a Demo Drive"
    body.style.backgroundImage = "url('./fourth_car.jpeg')"
    body.style.color = "black"
 } else if (lists[i].querySelector(".ok5")){
    h1Section.innerText = "Solar Roof"
    pSection.innerText = "Schedule a Virtual Consultation"
    body.style.backgroundImage = "url('./fifth_car.webp')"
    body.style.color = "white"
 } else{
    h1Section.innerText = "Soalr Panels"
    pSection.innerText = "Schedule a Virtual Consultation"
    body.style.backgroundImage = "url('./sisth.jpeg')"
    body.style.color = "black"
 }
})
}