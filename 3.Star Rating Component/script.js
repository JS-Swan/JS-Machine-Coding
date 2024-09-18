const stars=document.querySelectorAll(".fa-star-o");
const rateValue=document.querySelector(".rating-value");

stars.forEach((item,index)=>{
  item.dataset.rating=index+1
 item.addEventListener("mouseover",handelMouseOver)
 item.addEventListener("click",handelOnClick)
 item.addEventListener("mouseleave",handelMouseLeave)
})

function handelMouseOver(event){
  const currentSelectedRating=event.target.dataset.rating;
  if(!currentSelectedRating) return;
  else{
    handelSelectedStars(currentSelectedRating);
  }
}
function handelSelectedStars(getCurrentRating){
  for(let i=0;i<5;i++){
    if(i<getCurrentRating){
     stars[i].classList.replace('fa-star-o','fa-star');
    }
    else{
      stars[i].classList.replace('fa-star','fa-star-o')
    }
  }
}
let totalSelectedRating=-1;
function handelOnClick(event){
  totalSelectedRating=event.target.dataset.rating;
  handelSelectedStars(totalSelectedRating)
  rateValue.textContent=totalSelectedRating

}
function handelMouseLeave(){
   handelSelectedStars(totalSelectedRating)
}