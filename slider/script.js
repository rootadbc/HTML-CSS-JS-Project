// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;



document.addEventListener("DOMContentLoaded", initializeSlider)
// "DOMContentLoaded" - a type of even, like click - but , it makes sure the DOM is loaded as a triger

function initializeSlider(){
    
    if(slides.length > 0){
    // this tells us, to display the func - if our slides(imgs) , is greater than 0..
        slides[slideIndex].classList.add("displaySlide");
        // 

        intervalId = setInterval(nextSlide, 5000);
        // call our next slide after a set amount of time
        // setInterval(function, time) - it calls our function after a said amount of time (5s);

    }
    

    
}

function showSlide(index){

    // here - when the slideSHow finishes, it shoudl reset back to zero
    if(index >=  slides.length){
    // here - it says, if our list of images exceeds our img list...
        slideIndex = 0;
        // it should reset back to 0
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");


}

function prevSlide(){
// onclick function()

    clearInterval(intervalId);
    // stops our interval timer of 5s, when we click prev


    // this makes the imgs go prev
    slideIndex--;
    showSlide(slideIndex);


}

function nextSlide(){
// onclick function()
// this section is suppose to navigate into next slide

    slideIndex++;
    // this tells us to move to the next slide
    showSlide(slideIndex);


}