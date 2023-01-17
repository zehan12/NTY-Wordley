import { computeGuess, LetterState } from "./WordUtils";

const LETTER_LENGTH = 5;

const WordRow = ({ lettersProps = "" }) => {
    const lettersRemaing = LETTER_LENGTH - lettersProps.length;
    const letters = lettersProps.split("").concat(Array(lettersRemaing).fill(""));

    const guessStates = computeGuess(lettersProps);
    console.log(guessStates)

    const characterStyles = {
        [LetterState.Miss]: 'bg-[#3A3A3C] border-[#3A3A3C]',
        [LetterState.Match]: 'bg-[#538D4E] border-[#538D4E]',
        [LetterState.Present]: 'bg-[#B59F3B] border-[#B59F3B]'
    }

    const CharacterBox = ({ value, state }) => {
        const styles = state == null ? '' : characterStyles[state]
        return (
            <div className={`inline-block border text-white p-4 uppercase font-bold text-2xl text-center mx-[-6px] ${styles}`}>
                {value}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-5 gap-6">
            {
                letters.map((char, index) => (
                    <CharacterBox
                        key={index}
                        value={char}
                        state={guessStates[index]}
                    />
                ))
            }
        </div>
    )
}

export default WordRow;