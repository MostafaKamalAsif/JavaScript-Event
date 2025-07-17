let Drack= document.getElementById("Drack");
let light=document.getElementById("light")
let flagGreen= document.getElementById("flagGreen")
let flagRed= document.getElementById("flagRed")
let Bdflag= document.getElementById("Bdflag")
let Htext=document.getElementById("Htext")
let Clear=document.getElementById("Clear")
let number=document.getElementById("number")
let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let sum=0


// Mode part start 

Drack.addEventListener("click",()=>{
document.body.style.background="#333"
Drack.style.display="none"
light.style.background="white"
light.style.color="black"
light.style.display="block"
Bdflag.style.color="black"
Bdflag.style.background="white"
Clear.style.color="black"
Clear.style.background="white"
number.style.color="white"
plus.style.color="black"
plus.style.background="white"
minus.style.color="black"
minus.style.background="white"
Htext.style.color="white"

})

function Light() {

light.addEventListener("click",()=>{
document.body.style.background="white"
light.style.display="none"
Drack.style.background="black"
Drack.style.color="white"
Bdflag.style.background="black"
Bdflag.style.color="white"
Clear.style.background="black"
Clear.style.color="white"
number.style.color="black"
plus.style.background="black"
plus.style.color="white"
minus.style.background="black"
minus.style.color="white"
Htext.style.color="black"
Drack.style.display="block"
})
}

// Mode part End 

// Flag part start 
Bdflag.addEventListener("click", ()=>{
    flagGreen.style.display="block"
    flagRed.style.display="block"
    Bdflag.style.display="none"
    Clear.style.display="block"
    Htext.innerHTML="This is Bangladesh Flag:"
    Htext.style.paddingLeft="420px"
    flagGreen.style.marginTop="50px"
    
})
// Flag part End

// Clear part start 
Clear.addEventListener("click", ()=>{
    flagGreen.style.display="none"
    flagRed.style.display="none"
    Clear.style.display="none"
    Bdflag.style.display="block"
    Htext.innerHTML="Flag:"
    Htext.style.paddingLeft="0px"
})
// Clear down part End 
// count down part start 

plus.addEventListener("click", ()=>{
    if (sum<=9) {
        sum++
        number.innerHTML=(sum)
        
    }
    else{
        alert("The number is not going to increase more.")
    }
})


minus.addEventListener("click", ()=>{
    if (sum>0) {
        sum--
        number.innerHTML=(sum)
        
    }
    else{
        alert("The number is not going to decrease more.")
    }
})
// count down part End 