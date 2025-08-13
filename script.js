const text = "S.Srivastav..."; // Apna text yaha likho
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100); // Typing speed adjust karne ke liye yaha time (ms) badhao/ghatao
    }
}

window.onload = typeEffect; // Page load hone par animation start ho jayega
