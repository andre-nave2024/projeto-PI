const button = document.getElementById('menu-button');
const menu = document.getElementById('menu-hamburguer');

button.addEventListener("click", function (e){
   menu.style.display === "block" ? menu.style.display = "none" : menu.style.display = "block";
})