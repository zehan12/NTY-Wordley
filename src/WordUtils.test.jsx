import { render } from "@testing-library/react";
import { getRandomWord, LetterState, computeGuess } from "./WordUtils";


describe('computeGuess', () => {
    it('should works with match and presents', () => {
        expect(computeGuess('boost', 'basic')).toEqual([
            LetterState.Match,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Present,
            LetterState.Miss,
        ]);
    });

    it('should full match', () => {
        expect(computeGuess('boost', 'boost')).toEqual([
            LetterState.Match,
            LetterState.Match,
            LetterState.Match,
            LetterState.Match,
            LetterState.Match,
        ]);
    });

    it('should full miss', () => {
        expect(computeGuess('guard', 'boost')).toEqual([
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Miss,
        ]);
    });

    it('should only does one match when two letters exist', () => {
        expect(computeGuess('solid', 'boost')).toEqual([
            LetterState.Present,
            LetterState.Match,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Miss,
        ]);
    });

    it('should returns empty array when given incomplete guess', () => {
        expect(computeGuess('so', 'boost')).toEqual([]);
    });

    it('should when 2 letters are present but answer has only 1 of those letters', () => {
        expect(computeGuess('allol', 'smelt')).toEqual([
            LetterState.Miss,
            LetterState.Present,
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Miss,
        ]);
    });

    it('should when 1 letter matches but guess has more of the same letter', () => {
        expect(computeGuess('allol', 'colon')).toEqual([
            LetterState.Miss,
            LetterState.Miss,
            LetterState.Match,
            LetterState.Match,
            LetterState.Miss,
        ]);
    });
});