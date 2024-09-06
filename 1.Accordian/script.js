const data=[{
    id:'1',
    question:"What are accordian Components?",
    answer:"Accordian are user interface elements used for"
},
{
    id:'2',
    question:"What are they used for?",
    answer:"interface elements used for interface elements used for"
},
{
    id:'3',
    question:"What are accordian Components?",
    answer:"Accordian are user interface elements used for"
}];
// 

const accordianWrapper=document.querySelector(".accordian");
function createAccordianData(){
    accordianWrapper.innerHTML=data.map(dataItem=>`
        <div class="accordian_item">
        <div class="accordian_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordian_content">
         <p>${dataItem.answer}</p>
        </div>
        </div>
        
        `).join("")
}

createAccordianData();

const getAccordianTitles=document.querySelectorAll(".accordian_title");

getAccordianTitles.forEach((currentItems)=>{
 
    currentItems.addEventListener("click",(event)=>{
        
        if(currentItems.classList.contains("active")){
            currentItems.classList.remove("active");
        }
        else{
            let getAlreadyAddedActiveClasses=document.querySelectorAll(".active");
            getAlreadyAddedActiveClasses.forEach((currentActiveItems)=>{
              currentActiveItems.classList.remove("active");  
            })
        }
        currentItems.classList.add("active")
        console.log(currentItems.classList);
    })
})