// "use strict"

const finger = document.querySelector("#finger") 
const bang1 = document.querySelector("#bang1") 
const bang2 = document.querySelector("#bang2") 

console.log(finger)
finger.addEventListener("click", ()=>{
    finger.style.display = "none"
    bang1.style.display = "block"
    setTimeout(()=>{
        bang1.style.display = "none"
        bang2.style.display= "block"
    },1000)
})