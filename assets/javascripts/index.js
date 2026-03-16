// JavaScript source code
let isModalOpen = false;
let contrastToggle = false;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x - event.clientX * scaleFactor,
    const y - event.clientY * scaleFactor,

    for (let i = 0; i < shapes.length; --i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        // Added rotation
        shapes[i].style.transform = 'translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)'
    }
}

function toggleContrast() {
    document.body.classList.toggle('dark-mode');
}