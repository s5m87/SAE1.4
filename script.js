

const audio = document.getElementById("audiSound");
const startbouton = document.getElementById("startbouton");
const svg = document.querySelector(".audi-svg");
const border = document.querySelector(".page-border");
const overlay = document.querySelector(".black-overlay");
const heroTitle = document.querySelector(".hero-title");
const audiText = document.querySelector(".audi-text");
const soundToggle = document.getElementById("soundToggle");

audio.muted = true;

svg.classList.add("hidden");

if (soundToggle) {
    console.log("Bouton son trouvé, ajout du listener");
    soundToggle.addEventListener("click", function(e) {
        console.log("CLIC DETECTE !");
        e.preventDefault();
        
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            soundToggle.textContent = "Son OFF";
            console.log("Son activé");
        } else {
            audio.muted = true;
            soundToggle.textContent = "Son ON";
            console.log("Son coupé");
        }
    });
}

startbouton.addEventListener("click", () => {
    overlay.classList.add("active");
    startbouton.remove();
    if (border) {
        border.remove();
    }
    if (heroTitle) {
        heroTitle.remove();
    }
    
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
    
    setTimeout(() => {
        svg.classList.remove("hidden");
        if (audiText) {
            audiText.classList.remove("hidden");
        }
    }, 1500);
    
    setTimeout(() => {
        window.location.href = "home.html";
    }, 9000);
});


function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.querySelector('.menu-toggle');
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        document.addEventListener('click', function (event) {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.querySelector('.menu-toggle');
            const entete_navigation = document.querySelector('.entete_navigation');

            if (!entete_navigation.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });