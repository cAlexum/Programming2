const RandNum = Math.floor(Math.random() * 100) + 1;

let Lives = parseInt(document.getElementsByClassName("lastResult")[0].innerText);
let totalGuesses = [];

const GuessFunction = (e) => {
    e.preventDefault();
    let Guess = document.getElementById("guessField").value;
    if (Lives == 0) {
        document.getElementById("subt").disabled = true;
        alert("You lost!");
    }
    else if ( Guess in totalGuesses || Guess < 1) {
      
    }
    else if (Guess !== RandNum) {
        Lives = Lives - 1;
        document.getElementsByClassName("lastResult")[0].innerText = Lives;
        totalGuesses.push(Guess);
        for (let i = 0; i < totalGuesses.length; i++) {
            for (let j = 0; j< totalGuesses.length; j++) {
              if (i == j) {}
              else if (totalGuesses[i] == totalGuesses[j] && i !== 0) {
                totalGuesses.splice(i,1);
                break
              }
              else if (totalGuesses[i] == totalGuesses[j] && i == 0) {
                totalGuesses.splice(0,1)
          }
            }
          } 
          totalGuesses.sort();
          document.getElementsByClassName("guesses")[0].innerText = totalGuesses.toString();
    }
    else if (Guess == RandNum) {
        alert("You Won!");
    }
    };
    ;
document.getElementById("subt").addEventListener("click", GuessFunction);
