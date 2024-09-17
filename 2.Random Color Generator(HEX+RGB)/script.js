const hexBtn=document.querySelector(".hex-btn");
const hexValue=document.querySelector(".hex-value");
const hexContainer=document.querySelector(".hex-container");

let finalHexColor="";
hexBtn.addEventListener("click",()=>{
  let hexColor="";
  const hexCode="0123456789ABCDEF";
  for(let i=0;i<6;i++){
    hexColor+=hexCode.charAt(Math.floor(Math.random() * hexCode.length));
  }
  hexContainer.style.backgroundColor=`#${hexColor}`;
  hexValue.textContent=`#${hexColor}`;
  finalHexColor=`#${hexColor}`;
})

const clipBtn=document.querySelector(".clip-btn");
clipBtn.addEventListener("click",()=>{
  navigator.clipboard.writeText(finalHexColor)
})
// RGB 

const rgbContainer=document.querySelector(".rgb-container");
const redRange=document.getElementById("red")
const greenRange=document.getElementById("green")
const blueRange=document.getElementById("blue");
const rgbValue=document.querySelector(".rgb-value")
const rgbBtn=document.querySelector(".rgb-btn");

rgbBtn.addEventListener("click",()=>{
  let red=redRange.value;
  let green=greenRange.value;
  let blue=blueRange.value;
  rgbValue.textContent=`rgb(${red},${green},${blue})`;
  rgbContainer.style.backgroundColor=`rgb(${red},${green},${blue})`
})