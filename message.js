/* ==========================================
            ELEMENTS
========================================== */

const intro = document.getElementById("intro");
const continueBtn = document.getElementById("continueBtn");
const hero = document.getElementById("hero");
const music = document.getElementById("bgMusic");
const restart = document.getElementById("restart");

/* ==========================================
            INTRO SCREEN
========================================== */

continueBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {

        intro.style.display = "none";

        hero.scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

});

/* ==========================================
        TYPEWRITER EFFECT
========================================== */

const title = document.querySelector(".hero h1");

const originalText = title.innerText;

title.innerHTML = "";

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        title.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeWriter,1000);

});

/* ==========================================
        SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".timelineItem,.polaroid,.letterPaper,.reasonCard,.musicPlayer,.wishCard,.giftBox"
).forEach(item=>{

    observer.observe(item);

});

/* ==========================================
        HERO SCROLL TEXT
========================================== */

const scrollText = document.querySelector(".scrollText");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        scrollText.style.opacity="0";

    }

    else{

        scrollText.style.opacity="1";

    }

});

/* ==========================================
        BACKGROUND MUSIC
========================================== */

window.addEventListener("load",()=>{

    const savedTime=sessionStorage.getItem("musicTime");

    if(savedTime){

        music.currentTime=parseFloat(savedTime);

    }

    music.play().catch(()=>{

        console.log("Autoplay blocked.");

    });

});

window.addEventListener("beforeunload",()=>{

    sessionStorage.setItem(

        "musicTime",

        music.currentTime

    );

});

/* ==========================================
        RESTART BUTTON
========================================== */

restart.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
        HERO PARALLAX
========================================== */

window.addEventListener("mousemove",(e)=>{

    const moon=document.querySelector(".moon");

    const x=(window.innerWidth/2-e.clientX)/40;

    const y=(window.innerHeight/2-e.clientY)/40;

    moon.style.transform=`translate(${x}px,${y}px)`;

});

/* ==========================================
        STORY IMAGE HOVER
========================================== */

document.querySelectorAll(".content img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

/* ==========================================
        POLAROID HOVER
========================================== */

document.querySelectorAll(".polaroid").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.zIndex="50";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.zIndex="1";

    });

});

/* ==========================================
            PLAYLIST
========================================== */

const playBtn = document.getElementById("playSong");
const prevBtn = document.getElementById("prevSong");
const nextBtn = document.getElementById("nextSong");

const cover = document.querySelector(".cover img");

let playing = true;

if(playBtn){

    playBtn.innerHTML = "⏸";

    playBtn.addEventListener("click",()=>{

        if(playing){

            music.pause();

            playBtn.innerHTML="▶";

            cover.style.animationPlayState="paused";

        }

        else{

            music.play();

            playBtn.innerHTML="⏸";

            cover.style.animationPlayState="running";

        }

        playing=!playing;

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        music.currentTime=0;

    });

}

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        music.currentTime=0;

    });

}

/* ==========================================
            GIFT
========================================== */

const gift = document.getElementById("gift");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if(gift){

gift.addEventListener("click",()=>{

    gift.style.transform="scale(1.3) rotate(20deg)";
    gift.innerHTML="💖";

    createConfetti();

    createHearts();

    setTimeout(()=>{

        popup.style.display="flex";

    },700);

});

}

/* ==========================================
            CLOSE POPUP
========================================== */

if(closePopup){

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

}

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

/* ==========================================
            CONFETTI
========================================== */

function createConfetti(){

const container=document.getElementById("confettiContainer");

for(let i=0;i<150;i++){

    const piece=document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left=Math.random()*100+"vw";

    piece.style.top="-20px";

    piece.style.background=

    `hsl(${Math.random()*360},90%,70%)`;

    piece.style.animationDuration=

    (3+Math.random()*4)+"s";

    piece.style.animationDelay=

    (Math.random()*2)+"s";

    container.appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },7000);

}

}

/* ==========================================
            HEARTS
========================================== */

function createHearts(){

for(let i=0;i<40;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=

    (14+Math.random()*20)+"px";

    heart.style.animationDuration=

    (4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

}

/* ==========================================
        BUTTON CLICK EFFECT
========================================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

    btn.style.transform="scale(.92)";

});

btn.addEventListener("mouseup",()=>{

    btn.style.transform="scale(1)";

});

});

/* ==========================================
        IMAGE ZOOM
========================================== */

document.querySelectorAll(".polaroid img").forEach(img=>{

img.addEventListener("click",()=>{

    img.classList.toggle("zoom");

});

});

/* ==========================================
        LETTER GLOW
========================================== */

const letter=document.querySelector(".letterPaper");

if(letter){

letter.addEventListener("mouseenter",()=>{

    letter.style.boxShadow=

    "0 0 45px rgba(255,255,255,.25)";

});

letter.addEventListener("mouseleave",()=>{

    letter.style.boxShadow=

    "0 20px 50px rgba(0,0,0,.35)";

});

}

/* ==========================================
            SHOOTING STARS
========================================== */

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"vh";
    star.style.left="-200px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(createShootingStar,5000);


/* ==========================================
        FLOATING HEARTS BACKGROUND
========================================== */

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (12+Math.random()*12)+"px";

    heart.style.animationDuration=
    (6+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

},2500);


/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=
    document.documentElement.scrollHeight-
    window.innerHeight;

    const percent=
    (window.scrollY/totalHeight)*100;

    progress.style.width=percent+"%";

});


/* ==========================================
        PROGRESS BAR STYLE
========================================== */

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.width="0";
progress.style.background="#8ec5ff";
progress.style.zIndex="999999";
progress.style.boxShadow="0 0 15px #8ec5ff";


/* ==========================================
        TWINKLING STARS
========================================== */

setInterval(()=>{

    const stars=document.querySelector(".stars");

    stars.style.opacity=.6+Math.random()*.4;

},1000);


/* ==========================================
        SECTION FADE
========================================== */

const sections=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";

    }

});

},{
    threshold:.1
});

sections.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(40px)";
    sec.style.transition="1s";

    revealObserver.observe(sec);

});


/* ==========================================
        ENDING POPUP
========================================== */

const ending=document.querySelector(".ending");

const endingObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        setTimeout(()=>{

            if(popup){

                popup.style.display="flex";

            }

        },1500);

    }

});

},{
    threshold:.8
});

if(ending){

    endingObserver.observe(ending);

}


/* ==========================================
        PAGE TITLE ANIMATION
========================================== */

const titles=[

"❤️ Happy Birthday ❤️",

"🎂 I Love You 🎂",

"🌸 My Favorite Person 🌸",

"🎉 Have the Best Birthday 🎉"

];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},3000);


/* ==========================================
        KEYBOARD SHORTCUTS
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    if(e.key==="End"){

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

    }

});


/* ==========================================
        FINAL MESSAGE
========================================== */

console.log(
`
=====================================

Happy Birthday ❤️

Made with love by Shayne.

=====================================
`
);