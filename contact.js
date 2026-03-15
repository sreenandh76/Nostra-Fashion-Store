document.addEventListener("DOMContentLoaded", function(){

// close signup banner
const closeBtn = document.getElementById("close")
const signup = document.getElementById("signup")

if(closeBtn){
closeBtn.onclick = function(){
signup.style.display = "none"
}
}


// mobile menu
var mobileMenu = document.getElementById("mobileMenu")

window.openMenu = function(){
mobileMenu.style.right = "0"
}

window.closeMenu = function(){
mobileMenu.style.right = "-250px"
}


// close mobile menu when clicking link
document.querySelectorAll("#mobileMenu a").forEach(link=>{
link.addEventListener("click",function(){
mobileMenu.style.right = "-250px"
})
})


// newsletter subscribe
window.subscribe = function(){

var email = document.getElementById("emailInput").value

if(email !== ""){
document.getElementById("subscribed-msg").style.display = "block"
}

}


// contact form submit
var form = document.getElementById("ContactForm")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

alert("Message sent successfully!")

})

}

})