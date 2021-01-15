import React from 'react'


function Navbar({ setProblem }) {


    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Vizualizr</a>
            <div className="options">
                <button className="addNumbersBtn" onClick={() => { setProblem("add Numbers") }}>
                    Add Upto
        </button>
                <button className="searchingBtn" onClick={() => { setProblem("searching") }}>
                    Searching
        </button>
                <button className="sortingBtn" onClick={() => { setProblem("sorting") }}>
                    Sorting
        </button>
            </div>
        </nav>
    )
}

export default Navbar
