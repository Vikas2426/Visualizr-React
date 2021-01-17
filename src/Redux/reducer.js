import { CHANGE_PROBLEM, CHANGE_ALGORITHM, CHANGE_INPUT_VALUE } from "./constants";

const initialState = {
    problem: "",
    inputValue: [],
    algorithm: ""
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_PROBLEM:
            return { ...state, problem: action.payload };
        case CHANGE_ALGORITHM:
            return { ...state, algorithm: action.payload };
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.payload };
        default:
            return state;
    }
}