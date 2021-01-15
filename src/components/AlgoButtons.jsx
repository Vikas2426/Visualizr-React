import React from 'react'
import './AlgoButtons.css';

function AlgoButtons({ algoType, setAlgorithm }) {

    const handleBtnClick = (event) => {
        setAlgorithm(event.target.textContent)
    }

    if (algoType === "add Numbers")
        return (
            <div className="algo-btn-div">
                <button onClick={handleBtnClick}>Naive</button>
                <button onClick={handleBtnClick}>A.P.</button>
                <button onClick={handleBtnClick}>Optimized A.P.</button>
            </div>
        )


    if (algoType === "searching")
        return (
            <div className="algo-btn-div">
                <button onClick={handleBtnClick}>Linear Search</button>
                <button onClick={handleBtnClick}>Binary Search</button>
            </div>
        )

    if (algoType === "sorting")
        return (
            <div className="algo-btn-div">
                <button onClick={handleBtnClick}>Bubble Sort</button>
                <button onClick={handleBtnClick}>Quick Sort</button>
                <button onClick={handleBtnClick}>Merge Sort</button>
            </div>
        )

    if (!algoType)
        return (
            <div className="algo-btn-div">
                Algorithm options appear hear.
            </div>
        )
}

export default AlgoButtons
