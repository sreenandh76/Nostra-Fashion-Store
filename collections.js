const closeBtn = document.getElementById("close")
const signup = document.getElementById("signup")

if(closeBtn){
closeBtn.onclick = function(){
signup.style.display = "none"
}
}

document.querySelectorAll("#mobileMenu a").forEach(link=>{ link.addEventListener("click",function(){ document.getElementById("mobileMenu").style.right="-250px" }) })
var mobileMenu = document.getElementById("mobileMenu")

function openMenu(){
    mobileMenu.style.right = "0"
}

function closeMenu(){
    mobileMenu.style.right = "-250px"
}
/* SEARCH */

var search = document.getElementById("search")
var products = document.querySelectorAll(".product")

if(search){
search.addEventListener("keyup",function(){

var value = search.value.toLowerCase()

products.forEach(function(product){

var name = product.querySelector("h3").textContent.toLowerCase()

if(name.includes(value)){
product.style.display = "block"
}else{
product.style.display = "none"
}

})

})
}



//* CHECKBOX FILTER */

var occasions = document.querySelectorAll(".occasion")
var colors = document.querySelectorAll(".color")
var categories = document.querySelectorAll(".category")
var prices = document.querySelectorAll(".price")

var products = document.querySelectorAll(".product")

function filterProducts(){

var selectedOccasion = []
var selectedColor = []
var selectedCategory = []
var selectedPrice = []

occasions.forEach(function(box){
if(box.checked){
selectedOccasion.push(box.value)
}
})

colors.forEach(function(box){
if(box.checked){
selectedColor.push(box.value)
}
})

categories.forEach(function(box){
if(box.checked){
selectedCategory.push(box.value)
}
})

prices.forEach(function(box){
if(box.checked){
selectedPrice.push(box.value)
}
})

products.forEach(function(product){

var occasion = product.dataset.occasion
var color = product.dataset.color
var category = product.dataset.category
var price = product.dataset.price

var occasionMatch = selectedOccasion.length === 0 || selectedOccasion.includes(occasion)
var colorMatch = selectedColor.length === 0 || selectedColor.includes(color)
var categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(category)

var priceMatch = false

if(selectedPrice.length === 0){
priceMatch = true
}else{
selectedPrice.forEach(function(p){

price = parseInt(price)

if(p == "600" && price <= 600){
priceMatch = true
}

if(p == "900" && price > 600 && price <= 900){
priceMatch = true
}

if(p == "1300" && price > 900 && price <= 1300){
priceMatch = true
}

if(p == "2000" && price > 1300){
priceMatch = true
}

})
}

if(occasionMatch && colorMatch && categoryMatch && priceMatch){
product.style.display = "block"
}else{
product.style.display = "none"
}

})

}

occasions.forEach(box => box.addEventListener("change", filterProducts))
colors.forEach(box => box.addEventListener("change", filterProducts))
categories.forEach(box => box.addEventListener("change", filterProducts))
prices.forEach(box => box.addEventListener("change", filterProducts))
var search = document.getElementById("searchInput")
var products = document.querySelectorAll(".product")

search.addEventListener("keyup", function(){

var enteredValue = search.value.toUpperCase()

for(var i=0;i<products.length;i++){

var productname = products[i].querySelector("h3").textContent

if(productname.toUpperCase().indexOf(enteredValue) < 0)
{
products[i].style.display="none"
}
else
{
products[i].style.display="block"
}

}

})