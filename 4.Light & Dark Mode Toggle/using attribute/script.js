const changeThemeBtn=document.querySelector(".change-theme-btn");
const body=document.querySelector('body');
changeThemeBtn.addEventListener("click",()=>{
  
  
  if(body.getAttribute('data-theme')==="null"){
    body.setAttribute('data-theme','dark') 
  }
  else if(body.getAttribute('data-theme')==='dark'){
    body.setAttribute('data-theme','blue')
    }
  else {
    body.setAttribute('data-theme',null) 
  }
})