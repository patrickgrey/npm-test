import * as JSConfetti from '/node_modules/js-confetti/dist/js-confetti.min.js';
// import * as JSConfetti from './node_modules/js-confetti/dist/js-confetti.browser.js';
console.log("JSConfetti: ", JSConfetti);


const jsConfetti = new JSConfetti();

const testButton = document.querySelector("#testButton");
testButton.addEventListener("click", function (event) {
  jsConfetti.addConfetti();
})

console.log("index loaded");