const btn = document.getElementById("btn");
const msg = document.getElementById("message-box");

btn.addEventListener("click", () => {
    msg.classList.remove("hidden");
});


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
