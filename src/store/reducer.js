import { getRandomWord } from "../WordUtils";

const intialState = {
    guess: getRandomWord(),
    counter: 0

}

const Reducer = (state = intialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    else {

        return state;
    }
}

export default Reducer;