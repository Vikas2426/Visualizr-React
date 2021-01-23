import { CHANGE_INPUT_VALUE, CHANGE_ALGORITHM, CHANGE_PROBLEM, CHANGE_DATA, CHANGE_NUM } from './constants.js'

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

export const setData = (input, time) => ({
    type: CHANGE_DATA,
    payload: [input, time]
})

export const setNum = input => ({
    type: CHANGE_NUM,
    payload: input
})