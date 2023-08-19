//Sticky Navbar

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

// Hamburger Menu

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navlist');

document.onclick=function(e){
    if(e.target !== menu_btn && e.target !== mobile_menu)
    {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }
}
menu_btn.addEventListener("click",function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

// Typing Text Animation

const dynamicText = document.querySelector("h5 span");
const words = ["Web Developer", "Programmer", "Fast Learner"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

// On Scroll Reveal

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 200,
    viewFactor: 0.15
});

ScrollReveal().reveal('.home-text,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img,.about-text,.skills,.contact-form,footer',{origin:'top'});
ScrollReveal().reveal('.projects',{origin:'bottom'});

