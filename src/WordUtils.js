import word from "./words.json";

export const getRandomWord = ( ) => {
    const randomIndex = Math.floor(Math.random()* word.length);
    return word[randomIndex];
}

// const computeGuess = ( guess, wordString ) => {

// }

