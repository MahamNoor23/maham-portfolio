/* =====================================================
   MAHAM NOOR PORTFOLIO
   MAIN JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
   LOAD HEADER
========================= */


const header = document.getElementById("header");


if(header){

fetch("header.html")

.then(response => response.text())

.then(data => {

header.innerHTML = data;


/* initialize menu after loading header */

initMenu();

initActiveNavigation();

});


}





/* =========================
   LOAD FOOTER
========================= */


const footer = document.getElementById("footer");


if(footer){


fetch("footer.html")

.then(response => response.text())

.then(data=>{


footer.innerHTML=data;


/* current year */

const year = document.querySelector(".current-year");


if(year){

year.textContent = new Date().getFullYear();

}


});


}






/* =========================
   HEADER SCROLL EFFECT
========================= */


window.addEventListener("scroll",function(){


const headerElement=document.querySelector(".header");


if(headerElement){


if(window.scrollY > 50){

headerElement.classList.add("scrolled");

}

else{

headerElement.classList.remove("scrolled");

}


}



});







/* =========================
   TYPING EFFECT
========================= */


const typingElement=document.querySelector(".typing");


if(typingElement){


const words=[

"WordPress Developer",

"Front-End Developer",

"Gutenberg Developer",

"Elementor Developer",

"Webflow Developer"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;



function typing(){


let currentWord=words[wordIndex];


if(!deleting){


typingElement.textContent =
currentWord.substring(0,charIndex++);



if(charIndex > currentWord.length){

deleting=true;

setTimeout(typing,1500);

return;

}


}

else{


typingElement.textContent =
currentWord.substring(0,charIndex--);



if(charIndex < 0){

deleting=false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex=0;

}

}


}



setTimeout(typing,deleting ? 60 : 120);



}



typing();



}









/* =========================
   REVEAL ANIMATION
========================= */


const reveals=document.querySelectorAll(".reveal");


function revealOnScroll(){


reveals.forEach(element=>{


const windowHeight=window.innerHeight;

const elementTop=element.getBoundingClientRect().top;


if(elementTop < windowHeight - 100){

element.classList.add("active");

}


});


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target=document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});









/* =========================
   IMAGE LAZY LOAD
========================= */


document.querySelectorAll("img")
.forEach(img=>{


img.setAttribute(
"loading",
"lazy"
);


});







/* =========================
   EXTERNAL LINKS
========================= */


document.querySelectorAll(
'a[target="_blank"]'
)
.forEach(link=>{


link.setAttribute(
"rel",
"noopener noreferrer"
);


});



});







/* =====================================================
   FUNCTIONS
===================================================== */







/* =========================
   MOBILE MENU
========================= */


function initMenu(){



const menuBtn=document.querySelector(".menu-btn");

const navbar=document.querySelector(".navbar");



if(!menuBtn || !navbar){

return;

}



menuBtn.addEventListener(
"click",
()=>{


navbar.classList.toggle("active");


menuBtn.classList.toggle("open");



});







navbar.querySelectorAll("a")
.forEach(link=>{


link.addEventListener(
"click",
()=>{


navbar.classList.remove("active");

menuBtn.classList.remove("open");


});


});




}








/* =========================
   ACTIVE NAVIGATION
========================= */


function initActiveNavigation(){



const links=document.querySelectorAll(
".navbar a"
);



let currentPage =
window.location.pathname.split("/").pop();



if(currentPage===""){

currentPage="index.html";

}



links.forEach(link=>{


let href =
link.getAttribute("href");



if(href===currentPage){


link.classList.add("active");


}



});



}
