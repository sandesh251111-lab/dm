
// Birthday date: November 3, 2026
// Time: 12:00 AM Nepal Time (UTC +5:45)

const birthdayDate = new Date(
    "2026-11-03T00:00:00+05:45"
).getTime();

const countdown = setInterval(function () {

    const now = Date.now();
    const difference = birthdayDate - now;

    if (difference <= 0) {

        clearInterval(countdown);

        document.getElementById("countdown")
            .classList.add("hidden");

        document.getElementById("note")
            .classList.add("hidden");

        document.getElementById("mainTitle")
            .innerHTML = "Happy Birthday<br>Swastika! 🎂";

        document.getElementById("subtitle")
            .innerHTML =
            "Your special moment has arrived! ❤️";

        document.getElementById("birthdayContent")
            .classList.remove("hidden");

        createHearts();

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}, 1000);


// Hidden birthday message

function showMessage() {

    document.getElementById("secretMessage")
        .classList.remove("hidden");

    createHearts();
}


// Floating hearts animation

function createHearts() {

    const symbols = ["❤️", "💕", "🌸", "✨"];

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("span");

        heart.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = "20px";
        heart.style.zIndex = "1000";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 6s linear, opacity 6s";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.transform =
                `translateY(110vh) rotate(360deg)`;
            heart.style.opacity = "0";
        });

        setTimeout(() => heart.remove(), 6500);
    }
}
