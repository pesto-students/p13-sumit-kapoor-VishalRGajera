function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;

    while (guessCount < totalGuesses) {
        let promptText = "";
        if (guessCount === 0) {
            promptText = "Enter a number between 1 and 100.";
        } else if (guessCount > 0) {
            let prevGuess = parseInt(prompt("Please enter a number:"));

            if (isNaN(prevGuess)) {
                alert("Please enter a number.");
                continue;
            }

            if (prevGuess < numToGuess) {
                promptText = prevGuess + " is too small. Guess a larger number.";
            } else if (prevGuess > numToGuess) {
                promptText = prevGuess + " is too large. Guess a smaller number.";
            }
        }

        let userGuess = prompt(promptText);

        if (userGuess === null) {
            return 0;
        }

        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            alert("Please enter a number.");
            continue;
        }

        guessCount++;

        if (userGuess === numToGuess) {
            return guessCount;
        }
    }

    return 0;
}


console.log(playGuessingGame(5));
console.log(playGuessingGame(7, 3));