
let propulsion = document.querySelector(".lancement")
let coundown = document.querySelector('.compteur')
let rocket = document.querySelector("#rocket")
let number = 10

propulsion.addEventListener(
  'click',
  function(){
  setInterval(decollage, 1000);
}, false);

function decollage() {
  if(number > 0){
    coundown.innerHTML = (number -= 1)
  } else {
    rocket.style.transform = "translateY(-15000px)"
    rocket.style.transition = "all 15s"
  }
}

//interrogation button
let interrogation = document.querySelector(".absolute img")
let bonus = document.querySelector(".relative p")
let isActive = 0

interrogation.addEventListener(
  "click",
  function(){
    if(isActive == 0){
      bonus.style.display = "block"
      isActive = 1
    } else {
          bonus.style.display="none"
          isActive = 0
    }
  }
)
