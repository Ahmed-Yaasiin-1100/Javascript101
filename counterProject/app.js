let num = document.getElementById("num")
let incBtn = document.getElementById("inc")
let decBtn = document.getElementById("dec")


incBtn.addEventListener("click",()=>{
    num.textContent++
    num.style.color = "black"
})

decBtn.addEventListener("click",()=>{
    if(Number(num.textContent) <= 0){
        num .textContent = 0
    }else{
         num.textContent--
         num.style.color = "red"
    }
   
})
