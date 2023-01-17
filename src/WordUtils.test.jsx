import { render } from "@testing-library/react";
import {getRandomWord} from "./WordUtils";
import WordUtils from "./WordUtils"

describe('WordUtils', () => {

    console.log(getRandomWord,"kjkh")
    it('should retrun random word', () => {
        render(<WordUtils />);
        expect(getRandomWord()).toBeTruthy()
    })
})