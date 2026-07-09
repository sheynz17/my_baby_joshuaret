const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const vinyl = document.getElementById("vinyl");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

let isPlaying = false;

// ==============================
// PLAY / PAUSE
// ==============================

playBtn.addEventListener("click", () => {

    if (!isPlaying) {

        audio.play();

        playBtn.innerHTML = "⏸";

        vinyl.classList.add("playing");
        vinyl.classList.add("spin");

        isPlaying = true;

    } else {

        audio.pause();

        playBtn.innerHTML = "▶";

        vinyl.classList.remove("spin");

        isPlaying = false;

    }

});

// ==============================
// VOLUME
// ==============================

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

// ==============================
// UPDATE PROGRESS
// ==============================

audio.addEventListener("timeupdate", () => {

    const percent = (audio.currentTime / audio.duration) * 100;

    progress.value = percent || 0;

    currentTime.textContent = formatTime(audio.currentTime);

});

// ==============================
// SONG DURATION
// ==============================

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

});

// ==============================
// SEEK
// ==============================

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

});

// ==============================
// WHEN SONG ENDS
// ==============================

audio.addEventListener("ended", () => {

    playBtn.innerHTML = "▶";

    vinyl.classList.remove("spin");
    vinyl.classList.remove("playing");

    progress.value = 0;

    currentTime.textContent = "0:00";

    isPlaying = false;

});

// ==============================
// FORMAT TIME
// ==============================

function formatTime(time){

    if(isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

    if(seconds < 10){

        seconds = "0" + seconds;

    }

    return `${minutes}:${seconds}`;

}

// ==============================
// DEFAULT SETTINGS
// ==============================

audio.volume = 1;
volume.value = 1;