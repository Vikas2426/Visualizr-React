import React from 'react'
import './AlgoButtons.css';
import { useDispatch, useSelector } from 'react-redux'
import { setAlgorithm } from '../Redux/actions'

function AlgoButtons() {

    const problem = useSelector(state => state.problem)
    const dispatch = useDispatch();

    if (problem === "add Numbers")
        return (
            <div className="algo-btn-div">
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Naive</button>
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>A.P.</button>
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Optimized A.P.</button>
            </div>
        )


    if (problem === "searching")
        return (
            <div className="algo-btn-div">
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Linear Search</button>
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Binary Search</button>
            </div>
        )

    if (problem === "sorting")
        return (
            <div className="algo-btn-div">
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Bubble Sort</button>
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Quick Sort</button>
                <button onClick={(event) => dispatch(setAlgorithm(event.target.textContent))}>Merge Sort</button>
            </div>
        )

    if (problem === "")
        return (
            <div className="algo-btn-div">
                Algorithm options appear hear.
            </div>
        )
}

export default AlgoButtons
