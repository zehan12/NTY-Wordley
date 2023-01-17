import word from "./wordle-bank.json";



export const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * word.length);
    return word[randomIndex];
}

export const LetterState = Object.freeze({
    Miss: 'Miss',
    Present: 'Present',
    Match: 'Match'
});


export const computeGuess = (guess, answereStirng) => {
    const result = [];
    const guessArray = guess.split("");
    const answerArray = answereStirng.split("");
    // create an array with the same length as the answer string
    // and fill it with Miss as default
    const output = Array(answereStirng.length).fill(LetterState.Miss);

    guessArray.forEach((letter, index) => {
        if (letter === answerArray[index]) {
            output[index] = LetterState.Match;
        } else if (answerArray.includes(letter)) {
            output[index] = LetterState.Present;
        }
    });

    return output;
}

