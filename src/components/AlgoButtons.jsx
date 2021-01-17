import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlgorithm } from '../Redux/actions'

function AlgoButtons() {

    const problem = useSelector(state => state.problem)
    const dispatch = useDispatch();
    const handleClick = (event) => {
        dispatch(setAlgorithm(event.target.textContent))
    }
    if (problem === "add Numbers")
        return (
            <div className="algo-btn-div">
                <button onClick={handleClick}>Naive</button>
                <button onClick={handleClick}>A.P.</button>
                <button onClick={handleClick}>Optimized A.P.</button>
            </div>
        )


    if (problem === "searching")
        return (
            <div className="algo-btn-div">
                <button onClick={handleClick}>Linear Search</button>
                <button onClick={handleClick}>Binary Search</button>
            </div>
        )

    if (problem === "sorting")
        return (
            <div className="algo-btn-div">
                <button onClick={handleClick}>Bubble Sort</button>
                <button onClick={handleClick}>Quick Sort</button>
                <button onClick={handleClick}>Merge Sort</button>
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
