// codes for the functionalities goes here.
//Start Menu-header area function
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let arrayLength = getSidebarLinks.length;

let addActive = function(){
    let currentUrl = location.href;
    for(let i=0; i < arrayLength; i++){
        if(getSidebarLinks[i].href === currentUrl){
            getSidebarLinks[i].className = "active";
        }
    }
}
addActive();

//End Menu-header area function

let toggleNavStatus = false;
let menuToggleBtn = document.querySelector(".menu-btn");

menuToggleBtn.addEventListener("click", function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if(toggleNavStatus === false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        for(let i=0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true){
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for(let i=0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "visible";
        toggleNavStatus = false;
    }

}).classList.toggle('menu-btnc');


    