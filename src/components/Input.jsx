import React from 'react'

function Input() {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="form-container input-Form">
            <form className="form-inline">
                <input
                    type="text"
                    className="form-input" id="inlineFormInputName2" autoComplete="off"
                    autoFocus>
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
