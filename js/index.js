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

//Start Toggle Menu
let toggleNavStatus = false;
let menuToggleBtn = document.querySelector(".menu-btn");

let toggleNav = function(){
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

};
//End Toggle Menu function

// form validation starts here
// const firstName = document.getElementById("name")
// const lastName = document.getElementById("lastname")
// const email = document.getElementById("email")
// const message = document.getElementById("message")
// const err__message = document.getElementById("err")

// function send() {
//     if(firstName.value === '') {
//         err__message.innerText = 'firstname cannot be blank'
//     }

//     console.log("please c'mon")

// }

// document.getElementById("submit__btn").addEventListener('click', function(e) {
//     e.preventDefault()
//     send()
// })
