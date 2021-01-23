import { CHANGE_INPUT_VALUE, CHANGE_ALGORITHM, CHANGE_PROBLEM, CHANGE_DATA, CHANGE_NUM, CHANGE_RESULT } from './constants.js'

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

export const setData = (time) => ({
    type: CHANGE_DATA,
    payload: time
})

export const setNum = input => ({
    type: CHANGE_NUM,
    payload: input
})

export const setResult = result => ({
    type: CHANGE_RESULT,
    payload: result
})