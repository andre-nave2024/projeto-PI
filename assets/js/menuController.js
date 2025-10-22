const button = document.getElementById('menu-button');
const menu = document.getElementById('menu-hamburguer');

button.addEventListener("click", function (e){
    if(menu.style.display === "none")
        menu.style.display = "block";

    else
         menu.style.display = "none";
})