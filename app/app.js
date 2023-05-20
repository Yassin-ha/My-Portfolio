
// variables 

const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const firstLineIcon = document.querySelector(".line:nth-child(1)");
const centerLineIcon = document.querySelector(".line:nth-child(2)");
const lastLineIcon = document.querySelector(".line:nth-child(3)");
const text = document.getElementById("text");
var x = window.matchMedia("(max-width: 430px)");


// ***************************
// load animation 
window.addEventListener("load", () => {
    text.style.opacity = "100%";
    text.style.transform = "translateY(0px)";
})

// ***************************
// resize nav 
window.addEventListener("resize", function () {
    if (x.matches) {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menu.style.transform = "translate(0px, 0px)";
        firstLineIcon.style.transform = "rotate(0deg) translate(0px, 0px)";
        centerLineIcon.style.transform = "translateX(0px)";
        lastLineIcon.style.transform = "rotate(0deg) translate(0px, 0px)";
    } else {
        menu.style.opacity = "1";
        menu.style.visibility = "visible"
    }
})

// ***************************
// navBar event 
menuIcon.addEventListener("click", () => {
    if (menu.style.opacity == "1") {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menu.style.transform = "translate(-50%, -50%)";
        firstLineIcon.style.transform = "rotate(0deg) translate(0px, 0px)";
        centerLineIcon.style.transform = "translateX(0px)";
        lastLineIcon.style.transform = "rotate(0deg) translate(0px, 0px)";

    } else {
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
        menu.style.transform = "translate(-50%, 0%)";
        firstLineIcon.style.transform = "rotate(45deg) translate(0px, 10px)";
        centerLineIcon.style.transform = "translateX(60px)";
        lastLineIcon.style.transform = "rotate(-45deg) translate(1px, -12px)";
    }

});


// ***************************
// theme function 

const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click", () => {
    if (document.documentElement.getAttribute('data-theme') === "dark") {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.documentElement.setAttribute('data-theme', "light");
        localStorage.setItem('data-theme', "light")
    } else {
        document.documentElement.setAttribute('data-theme', "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('data-theme', "dark")
    }
})
// ****************************
// storage Theme 
window.onload = checkTheme();
function checkTheme() {
    const localStorageTheme = localStorage.getItem("data-theme");
    if(localStorageTheme !== null && localStorageTheme === "light") {
        document.documentElement.setAttribute("data-theme", localStorageTheme);
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}


// ***************************
//scrolling animation 



function reveal() {
    var reveals = document.querySelectorAll(".hid");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}

window.addEventListener("scroll", reveal);