var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerText.trim();

        console.log("buttonInnerHTML: ", buttonInnerHTML)


        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("assets/sounds/w-sound.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("assets/sounds/a-sound.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("assets/sounds/s-sound.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("assets/sounds/d-sound.mp3");
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio("assets/sounds/j-sound.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("assets/sounds/k-sound.mp3");
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio("assets/sounds/l-sound.mp3");
            tom7.play();
            break;
        default:
            console.log("Unhandled key: ", key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
