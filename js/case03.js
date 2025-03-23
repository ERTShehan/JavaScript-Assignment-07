document.addEventListener("DOMContentLoaded", function () {
    let lights = document.querySelectorAll(".box");
    let index = 0;
    let direction = 1;
    let interval;
    let sound = document.getElementById("knightSound");

    function animateLights() {
        lights.forEach(box => {
            box.style.backgroundColor = "white";
        });

        lights[index].style.backgroundColor = "red";

        index += direction;
        if (index === lights.length - 1 || index === 0) {
            direction *= -1;
        }
    }

    document.getElementById("start").addEventListener("click", function () {
        if (!interval) {
            interval = setInterval(animateLights, 150);
            sound.play();
        }
    });

    document.getElementById("stop").addEventListener("click", function () {
        clearInterval(interval);
        interval = null;
        lights.forEach(box => {
            box.style.backgroundColor = "white";
        });
        sound.pause();
        sound.currentTime = 0;
    });
});