let slider = document.querySelectorAll('.slider img');
let sliderIndex = 0;
let timeGap = null;

document.addEventListener("DOMContentLoaded", inilizer)

function inilizer(){

   if(slider.length > 0) {
slider[sliderIndex].classList.add("displayImg");
timeGap = setInterval(nextSlide,3000);
   }
}

function show(index){
   slider.forEach(sliders => sliders.classList.remove("displayImg") );

   if (index >= slider.length){
         sliderIndex = 0;
}
else if ( index < 0){
   sliderIndex = slider.length-1;
;
}
 

 slider[sliderIndex].classList.add('displayImg');
}
function nextSlide(){
   clearInterval(timeGap);
   sliderIndex++;
   show(sliderIndex);
   timeGap = setInterval(nextSlide, 3000);
  
}

function prevSlide(){
   clearInterval(timeGap);
   sliderIndex--;
   show(sliderIndex);
   timeGap = setInterval(nextSlide, 3000);
}


