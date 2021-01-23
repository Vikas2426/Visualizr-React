import { CHANGE_PROBLEM, CHANGE_ALGORITHM, CHANGE_INPUT_VALUE, CHANGE_DATA, CHANGE_NUM } from "./constants";

const initialState = {
    problem: "",
    inputValue: [],
    algorithm: "",
    data: [["Input", "Time"], [0, 0]],
    num: "",
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_PROBLEM:
            return { ...initialState, problem: action.payload };
        case CHANGE_ALGORITHM:
            return { ...state, algorithm: action.payload };
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.payload };
        case CHANGE_DATA:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case CHANGE_NUM:
            return {
                ...state,
                num: action.payload
            }
        default:
            return state;
    }
}