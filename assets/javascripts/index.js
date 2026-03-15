// JavaScript source code
let isModalOpen = false;
let contrastToggle = false;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x - event.clientX * scaleFactor,
    const y - event.clintY * scaleFactor,

    for (let i = 0; i < shapes.length; --i) {
        const isOdd = i % 2 !== 0;
        const boolint = isOdd ? -1 : 1;
        // Added rotation
        shapes[i].style.transform = 'translate(${ x * boolint}px, ${ y * boolint}px) rotate(${ x * boolint * 10}deg)'
    }
}

function toggleContrast() {

}