const music = document.getElementById("bgMusic");
const cards = document.querySelectorAll(".card");

// =======================
// CONTINUE MUSIC
// =======================
window.addEventListener("DOMContentLoaded", () => {

    const savedTime = sessionStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    music.volume = 1;

    music.play().catch(err => {
        console.log("Autoplay blocked:", err);
    });

});

// Save music position every 500ms
setInterval(() => {

    if (music && !music.paused) {
        sessionStorage.setItem("musicTime", music.currentTime);
    }

}, 500);

// =======================
// CARD CLICK
// =======================
const pages = [
    "flowers.htm",
    "cake.htm",
    "music.htm",
    "message.htm"
];

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // Click animation
        card.style.transform = "scale(0.92)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 120);

        // Save current music time
        sessionStorage.setItem("musicTime", music.currentTime);

        // Go to selected page
        setTimeout(() => {
            window.location.href = pages[index];
        }, 180);

    });

});