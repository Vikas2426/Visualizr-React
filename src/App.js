import React, { useState } from 'react';
import './App.css';

function App() {
  const [problem, setProblem] = useState();
  const year = new Date().getFullYear();



  return (
    <div className="App">
      <nav class="navbar">
        <a class="navbar-brand" href="#">Visualizr</a>
        <div class="options">
          <button class="addNumbersBtn" onClick={() => { setProblem("addNumbers") }}>
            Add Upto
        </button>
          <button class="searchingBtn" onClick={() => { setProblem("searching") }}>
            Searching
        </button>
          <button class="sortingBtn" onClick={() => { setProblem("sorting") }}>
            Sorting
        </button>
        </div>
      </nav>
      <div class="form-container input-Form">
        <form class="form-inline">
          <input type="text" class="form-input" id="inlineFormInputName2" autoComplete="off"></input>
          <button type="submit" class="form-btn body-btn" id='submit'>Submit</button>
        </form>
      </div>

      <div class="my-container">
        <div class="chart-container">
          <canvas id="chart" ></canvas>
        </div>
        <div class="code-container">
          <div class="algo-btn-container"></div>
          <div id='algoDiv'>
            <pre class='line-numbers' id="algorithm">
              <code class="language-javascript" id='code-content'>{problem}</code>
            </pre>
          </div>
        </div>
      </div>
      <footer>Copyright @ Vikas Choubey, India, {year}</footer>
    </div>
  );
}

export default App;
