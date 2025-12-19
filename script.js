const music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) music.pause();
    else music.play();
    isPlaying = !isPlaying;
}

function openMoments() {
    document.getElementById("popup").style.display = "block";
}

function closeMoments() {
    document.getElementById("popup").style.display = "none";
}

const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 400);
