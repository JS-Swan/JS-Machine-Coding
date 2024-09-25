const tabContainer=document.querySelector(".container");

const tabButtons=document.querySelectorAll(".tab-button")
const tabContents=document.querySelectorAll(".content");

tabContainer.addEventListener('click',(event)=>{
 const currentId=event.target.dataset.id;
if(currentId){
    tabButtons.forEach(btn=>{
        btn.classList.remove('active');
    })
 }
 event.target.classList.add('active')

//  For content section
tabContents.forEach(content=>{
   content.classList.remove('active')
})
const currentTabContent=document.getElementById(currentId);
currentTabContent.classList.add('active')
})