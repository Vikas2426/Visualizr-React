import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue, setData, setNum } from '../Redux/actions.js';
import addition from '../AlgorithmExecution/addition.js';
import searching from '../AlgorithmExecution/searching.js';
import sorting from '../AlgorithmExecution/sorting.js';


function Input() {
    const algoType = useSelector(state => state.problem);
    const inputValue = useSelector(state => state.inputValue);
    const algorithm = useSelector(state => state.algorithm);
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();
    let result = 0;
    const handleSubmit = (event) => {
        event.preventDefault()
        if (algorithm === "")
            alert("Please select an algorithm.")
        else {
            if (algoType === "add Numbers") result = addition(algorithm, inputValue);
            else if (algoType === "searching") result = searching(algorithm, inputValue, num);
            // else if (algoType === "sorting") result = sorting(algorithm, inputValue);
            dispatch(setData(inputValue, result));
        }

    }

    const getPlaceholder = () => {
        if (algoType === "add Numbers") return "any number";
        if (algoType === "searching" || algoType === "sorting") return "comma separated integer (n1,n2,n3)";
        return "";
    }

    const formatInput = (event) => {
        if (algoType === "add Numbers") {
            dispatch(setInputValue(event.target.value))
        }
        else if (algoType === "searching" || algoType === "sorting") {
            let input = event.target.value.split(",");
            dispatch(setInputValue(input))
        }
    }
    return (
        <div className="form-container input-Form">
            <form className="form-inline">
                <input
                    type="text"
                    className="form-input" id="inlineFormInputName2" autoComplete="off"
                    value={inputValue}
                    onChange={(event) => formatInput(event)}
                    placeholder={getPlaceholder()}
                >

                </input>
                {algoType === "searching" && <input
                    type="text"
                    className="form-input num" id="inlineFormInputName2" autoComplete="off"
                    value={num}
                    onChange={(event) => dispatch(setNum(event.target.value))}
                    placeholder="search for">
                </input>}
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="form-btn body-btn" id='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Input
