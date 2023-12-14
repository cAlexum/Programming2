const RandNum = Math.floor(Math.random() * 100) + 1;

let Lives = parseInt(document.getElementsByClassName("lastResult")[0].innerText);
let totalGuesses = []

const GuessFunction = (e) => {
    e.preventDefault();
    let Guess = document.getElementById("guessField").value;
    if (Guess !== RandNum) {
        Lives = Lives - 1;
        document.getElementsByClassName("lastResult")[0].innerText = Lives
        totalGuesses.push(Guess)
        document.getElementsByClassName("guesses")[0].innerText = totalGuesses.toString();
    }
    if (Guess == RandNum) {
        alert("You Won!");
    }
    if (Lives == 0) {document.getElementById("subt").disabled = true}
    };
document.getElementById("subt").addEventListener("click", GuessFunction);