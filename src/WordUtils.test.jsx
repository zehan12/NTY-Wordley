import { render } from "@testing-library/react";
import { getRandomWord, LetterState, computeGuess } from "./WordUtils";

describe("getRandomWord", () => {
    it("should return a random word from the words.json file", () => {
        const word1 = getRandomWord();
        const word2 = getRandomWord();

        console.log(word1, word2)

        expect(word1).toBeTruthy();
        expect(word2).toBeTruthy();
        expect(word1).not.toEqual(word2);
    });
});

describe("computeGuess", () => {
    it("should return an array of letter states", () => {
        const result = computeGuess("test", "best");
        expect(result).toEqual([LetterState.Present, LetterState.Match, LetterState.Match, LetterState.Match]);
    });

    it("should return an array of letter states for a correct guess", () => {
        const result = computeGuess("test", "test");
        expect(result).toEqual([LetterState.Match, LetterState.Match, LetterState.Match, LetterState.Match]);
    });

    it("should return an array of letter states for a partially correct guess", () => {
        const result = computeGuess("tent", "test");
        expect(result).toEqual([LetterState.Match, LetterState.Match, LetterState.Miss, LetterState.Match]);
    });

    it("should return an array of letter states for an incorrect guess", () => {
        const result = computeGuess("wrong", "test");
        expect(result).toEqual([LetterState.Miss, LetterState.Miss, LetterState.Miss, LetterState.Miss]);
    });

    // it("should return an array of letter states for a guess with extra letters", () => {
    //     const result = computeGuess("testextra", "test");
    //     console.log(result,"text")
    //     expect(result).toEqual([LetterState.Match, LetterState.Match, LetterState.Match, LetterState.Match, LetterState.Miss, LetterState.Miss, LetterState.Miss, LetterState.Miss]);
    // });

    it("should return an array of letter states for a guess with different case", () => {
        const result = computeGuess("Test", "test");
        console.log(result)

        expect(result).toEqual([LetterState.Miss, LetterState.Match, LetterState.Match, LetterState.Match]);
    });

});
