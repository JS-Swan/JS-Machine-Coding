const changeThemeBtn=document.querySelector(".change-theme-btn");
const body=document.querySelector('body');
changeThemeBtn.addEventListener("click",()=>{
  if(body.classList.contains('light')){
    body.classList.replace('light','dark');
  }else{
    body.classList.replace('dark','light');
  }

  if(changeThemeBtn.classList.contains('light')){
    changeThemeBtn.classList.replace('light','dark');
  }else{
    changeThemeBtn.classList.replace('dark','light');
  }
})