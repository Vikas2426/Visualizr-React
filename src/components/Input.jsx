import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from '../Redux/actions.js';

function Input() {
    const inputValue = useSelector(state => state.inputValue);
    const algorithm = useSelector(state => state.algorithm);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault()
        if (algorithm === "")
            alert("Please select an algorithm.")
    }
    return (
        <div className="form-container input-Form">
            <form className="form-inline">
                <input
                    type="text"
                    className="form-input" id="inlineFormInputName2" autoComplete="off"
                    autoFocus
                    value={inputValue}
                    onChange={(event) => dispatch(setInputValue(event.target.value))}>

                </input>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="form-btn body-btn" id='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Input
