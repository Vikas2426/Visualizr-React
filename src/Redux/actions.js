import { CHANGE_INPUT_VALUE, CHANGE_ALGORITHM, CHANGE_PROBLEM } from './constants.js'

export const setProblem = text => ({
    type: CHANGE_PROBLEM,
    payload: text
})

export const setAlgorithm = text => ({
    type: CHANGE_ALGORITHM,
    payload: text
})

export const setInputValue = input => ({
    type: CHANGE_INPUT_VALUE,
    payload: input
})