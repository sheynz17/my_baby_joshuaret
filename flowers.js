// ==========================
// FLOWER PAGE
// ==========================

const flower = document.querySelector(".flower");
const petals = document.querySelectorAll(".petal");

// ==========================
// FLOWER FLOAT
// ==========================

let angle = 0;

function animateFlower(){

    angle += 0.02;

    const y = Math.sin(angle) * 10;

    flower.style.transform =
        `translate(-50%, calc(-50% + ${y}px))`;

    requestAnimationFrame(animateFlower);

}

animateFlower();

// ==========================
// PETAL FLOATING
// ==========================

petals.forEach((petal,index)=>{

    let offset = index;

    function floatPetal(){

        offset += 0.03;

        const y = Math.sin(offset) * 8;

        petal.style.marginTop = y + "px";

        requestAnimationFrame(floatPetal);

    }

    floatPetal();

});

// ==========================
// PETAL CLICK EFFECT
// ==========================

petals.forEach((petal)=>{

    petal.addEventListener("click",()=>{

        petal.style.transform = "scale(1.1)";

        setTimeout(()=>{

            petal.style.transform = "scale(1)";

        },180);

    });

});

// ==========================
// RANDOM GLOW
// ==========================

setInterval(()=>{

    const randomPetal =
        petals[Math.floor(Math.random()*petals.length)];

    randomPetal.style.boxShadow =
        "0 0 20px #7aa7ff";

    setTimeout(()=>{

        randomPetal.style.boxShadow = "none";

    },500);

},1500);