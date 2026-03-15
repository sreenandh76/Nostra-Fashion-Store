const closeBtn = document.getElementById("close")
const signup = document.getElementById("signup")

if(closeBtn){
closeBtn.onclick = function(){
signup.style.display = "none"
}
}
var mobileMenu = document.getElementById("mobileMenu")

function openMenu(){
    mobileMenu.style.right = "0"
}

function closeMenu(){
    mobileMenu.style.right = "-250px"
}
/* SLIDER */

const slider = document.querySelector(".slider")
const slides = document.querySelectorAll(".slide")

let index = 0

function updateSlide(){
    const slideWidth = slides[0].offsetWidth
    slider.style.transform = `translateX(-${index * slideWidth}px)`
}

function nextSlide(){
    index++

    if(index >= slides.length){
        index = 0
    }

    updateSlide()
}

function prevSlide(){
    index--

    if(index < 0){
        index = slides.length - 1
    }

    updateSlide()
}

window.addEventListener("resize", updateSlide)
setInterval(nextSlide, 5000)



/* MOST WANTED SCROLL */

var container = document.getElementById("mostContainer")

if(container){

    var rightBtn = document.querySelector(".right-btn")
    var leftBtn = document.querySelector(".left-btn")

    if(rightBtn){
        rightBtn.addEventListener("click", function(){
            container.scrollLeft += 300
        })
    }

    if(leftBtn){
        leftBtn.addEventListener("click", function(){
            container.scrollLeft -= 300
        })
    }

}

function subscribe(){

var email=document.getElementById("emailInput").value

if(email!="")
{
document.getElementById("subscribed-msg").style.display="block"
}

}
window.addEventListener("scroll", function(){

    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }

    }

});

var hearts = document.querySelectorAll(".heart");

hearts.forEach(function(heart){

heart.addEventListener("click", function(){

if(heart.textContent == "♡"){
heart.textContent = "♥";
heart.style.color = "red";
}
else{
heart.textContent = "♡";
heart.style.color = "white";
}
});

});