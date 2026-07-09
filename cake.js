/* ==========================================
                CAKE.JS
========================================== */

/* ---------- MUSIC ---------- */

const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {

    const savedTime = sessionStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    music.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });

});

window.addEventListener("beforeunload", () => {

    sessionStorage.setItem(
        "musicTime",
        music.currentTime
    );

});


/* ---------- ELEMENTS ---------- */

const flame = document.getElementById("flame");
const finish = document.getElementById("finish");
const confettiContainer = document.getElementById("confettiContainer");

let blown = false;


/* ==========================================
        MICROPHONE BLOW DETECTION
========================================== */

async function startMicrophone(){

    if(!navigator.mediaDevices){
        console.log("Microphone not supported.");
        return;
    }

    try{

        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true
        });

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const source = audioContext.createMediaStreamSource(stream);

        const analyser = audioContext.createAnalyser();

        analyser.fftSize = 256;

        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        function detect(){

            analyser.getByteFrequencyData(dataArray);

            let volume = 0;

            for(let i=0;i<dataArray.length;i++){

                volume += dataArray[i];

            }

            volume /= dataArray.length;

            // Sensitivity
            if(volume > 45 && !blown){

                blown = true;

                blowCandle();

            }

            requestAnimationFrame(detect);

        }

        detect();

    }

    catch(error){

        console.log("Microphone permission denied.");

    }

}

startMicrophone();


/* ==========================================
            BLOW CANDLE
========================================== */

function blowCandle(){

    flame.classList.add("out");

    document.body.style.transition="1.5s";

    document.body.style.filter="brightness(.75)";

    createConfetti();

    setTimeout(()=>{

        finish.classList.add("show");

    },1000);

}


/* ==========================================
            CONFETTI
========================================== */

function createConfetti(){

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=
        `hsl(${Math.random()*360},90%,70%)`;

        confetti.style.animationDuration=
        (3+Math.random()*3)+"s";

        confetti.style.animationDelay=
        Math.random()*2+"s";

        confettiContainer.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },7000);

    }

}


/* ==========================================
        SPACEBAR FOR TESTING
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space" && !blown){

        blown=true;

        blowCandle();

    }

});


/* ==========================================
        DOUBLE CLICK TEST
========================================== */

flame.addEventListener("dblclick",()=>{

    if(blown) return;

    blown=true;

    blowCandle();

});


/* ==========================================
        TITLE
========================================== */

setInterval(()=>{

    if(blown){

        document.title="❤️ Happy Birthday ❤️";

    }

},1000);