import React from 'react'
import { useSelector } from 'react-redux';


function Result() {
    const result = useSelector(state => state.result)
    return (
        <div className="result">
            <button disabled>Result</button>
            <button disabled>{result}</button>
        </div>
    )
}

export default Result
