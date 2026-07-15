/* =====================================================
   MAHAM NOOR PORTFOLIO
   Main JavaScript
===================================================== */


/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


if(menuBtn){

    menuBtn.addEventListener("click", ()=>{

        navbar.classList.toggle("active");


        const icon = menuBtn.querySelector("i");


        if(navbar.classList.contains("active")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


    });

}




/* Close menu after clicking link */


document.querySelectorAll(".navbar a").forEach(link=>{


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


        if(menuBtn){

            const icon = menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


    });


});







/* =========================
   TYPING EFFECT
========================= */


const typingElement = document.querySelector(".typing");


if(typingElement){


const words = [


"WordPress Developer",

"Front-End Developer",

"Gutenberg Developer",

"Elementor Specialist",

"Webflow Developer",

"CMS Developer"


];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


let currentWord = words[wordIndex];



if(!deleting){


typingElement.textContent = currentWord.substring(
0,
charIndex++
);



if(charIndex > currentWord.length){


deleting = true;


setTimeout(typeEffect,1500);


return;


}


}



else{


typingElement.textContent = currentWord.substring(
0,
charIndex--
);



if(charIndex === 0){


deleting = false;


wordIndex++;


if(wordIndex >= words.length){

wordIndex = 0;

}


}



}



setTimeout(typeEffect,100);


}



typeEffect();


}









/* =========================
   HEADER BACKGROUND ON SCROLL
========================= */


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.style.background =
"rgba(255,255,255,0.95)";


header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.08)";


}

else{


header.style.background =
"rgba(255,255,255,0.85)";


header.style.boxShadow =
"none";


}



});







/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements =
document.querySelectorAll(
".section, .skill-card, .project-card, .timeline-item"
);



const revealOnScroll = ()=>{


revealElements.forEach(element=>{


const windowHeight =
window.innerHeight;



const elementTop =
element.getBoundingClientRect().top;



if(elementTop < windowHeight - 100){


element.style.opacity="1";

element.style.transform="translateY(0)";


}



});


};



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.7s ease";


});



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* =========================
   CURRENT YEAR FOOTER
========================= */


const footerYear =
document.querySelector("footer p");



if(footerYear){


const year = new Date().getFullYear();


footerYear.innerHTML =
`© ${year} Maham Noor. All Rights Reserved.`;


}





/* =========================
   ACTIVE NAVIGATION
========================= */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{


let current = "";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



const sectionHeight =
section.clientHeight;



if(
window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight
){


current = section.getAttribute("id");


}



});



navLinks.forEach(link=>{


link.style.color="";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color="#2563eb";


}



});


});