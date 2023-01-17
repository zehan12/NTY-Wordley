const LETTER_LENGTH = 5;

const WordRow = ({ lettersProps = "" }) => {
    const lettersRemaing = LETTER_LENGTH - lettersProps.length;
    const letters = lettersProps.split("").concat(Array(lettersRemaing).fill(""));


    const CharacterBox = ({ value }) => {
        return (
            <div className="inline-block border border-gray-500 p-4 uppercase font-bold text-2xl text-center mx-[-6px]">
                {value}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-5 gap-4">
            {
                letters.map((char) => (
                    <CharacterBox key={char} value={char} />
                ))
            }
        </div>
    )
}

export default WordRow;