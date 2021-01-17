import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { setProblem } from '../Redux/actions'

function Navbar() {
    const dispatch = useDispatch()
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Vizualizr</a>
            <div className="options">
                <button className="addNumbersBtn" onClick={() => { dispatch(setProblem("add Numbers")) }}>
                    Add Upto
        </button>
                <button className="searchingBtn" onClick={() => { dispatch(setProblem("searching")) }}>
                    Searching
        </button>
                <button className="sortingBtn" onClick={() => { dispatch(setProblem("sorting")) }}>
                    Sorting
        </button>
            </div>
        </nav>
    )
}

export default Navbar;
