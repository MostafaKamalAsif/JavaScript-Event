let Drack= document.getElementById("Drack");
let light=document.getElementById("light")
let flagGreen= document.getElementById("flagGreen")
let flagRed= document.getElementById("flagRed")
let Bdflag= document.getElementById("Bdflag")

Drack.addEventListener("click",()=>{
document.body.style.background="#333"
Drack.style.display="none"
light.style.background="white"
light.style.color="black"
light.style.display="block"

})

function Light() {

light.addEventListener("click",()=>{
document.body.style.background="white"
light.style.display="none"
Drack.style.background="#333"
Drack.style.color="white"
Drack.style.display="block"
})
}

Bdflag.addEventListener("click", ()=>{
    flagGreen.style.display="block"
    flagRed.style.display="block"
    Bdflag.style.display="none"
})
