
const loginScreen = document.getElementById("loginScreen");
const homeScreen = document.getElementById("homeScreen");

    const password = document.getElementById("password");
    const enterBtn = document.getElementById("enterBtn");
    const error = document.getElementById("error");

const startQuest = document.getElementById("startQuest");
const music = document.getElementById("bgMusic");


homeScreen.style.display = "none";
    const correctPassword = "051726";


enterBtn.addEventListener("click", login);

password.addEventListener("keypress", function(e){

if(e.key === "Enter"){
login();
    }

});

function login(){

    if(password.value === correctPassword){

        error.textContent = "";

        loginScreen.style.display = "none";
        homeScreen.style.display = "flex";

        // Play music
        music.volume = 0.5;

        music.play().catch(() => {});

        // Animation
        gsap.from("#boyfriend",{
            duration:1,
            scale:0,
            ease:"back.out(1.7)"
        });

        gsap.from("h2",{
            duration:1,
            y:40,
            opacity:0,
            delay:0.2
        });

        gsap.from(".welcomeText",{
            duration:1,
            opacity:0,
            delay:0.5
        });

        gsap.from(".pixelBtn",{
            duration:1,
            y:30,
            opacity:0,
            delay:0.8
        });

    }else{

        error.textContent = "Wrong Password!";

        gsap.fromTo(".loginBox",
            {x:-10},
            {
                x:10,
                duration:0.08,
                repeat:5,
                yoyo:true
            }
        );

    }

}

// ============================
// START QUEST
// ============================

startQuest.addEventListener("click",()=>{

    window.location.href="secondpage.html";

});

// ============================
// FLOATING STICKERS
// ============================

gsap.to(".star",{

    y:-15,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"

});

gsap.to(".heart",{

    y:15,
    duration:2.5,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"

});

gsap.to(".game",{

    rotation:8,
    duration:2,
    repeat:-1,
    yoyo:true

});

gsap.to(".gift",{

    rotation:-8,
    duration:2,
    repeat:-1,
    yoyo:true

});