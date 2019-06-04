const body = document.querySelector("body");

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
const IMG_NUMBER = 3;
function genNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genNumber();
    paintImage(randomNumber);
}

init();