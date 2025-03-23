let interval;
let sound = document.getElementById("knightSound");

function startAnimation() {
    let boxes = $(".box");
    let index = 0;
    let direction = 1;
    interval = setInterval(() => {
        // boxes.css("background-color", "rgb(50, 0, 0)");
        boxes.eq(index).css("background-color", "red");
        boxes.eq(index).fadeTo(200, 2, function () {
            $(this).fadeTo(200, 0);
        });
        index += direction;
        if (index === boxes.length - 1 || index === 0) {
            direction *= -1;
        }
    }, 250);
        sound.play();
}
     
function stopAnimation() {
    clearInterval(interval);
    // $(".box").css("background-color", "rgb(50, 0, 0)");
    sound.pause();
    sound.currentTime = 0;
}

$("#start").click(startAnimation);
$("#stop").click(stopAnimation);