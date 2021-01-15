import React, { useState } from 'react';
import './App.css';
import AlgoButtons from './components/AlgoButtons';
import Chart from './components/Chart';
import CodeContainer from './components/CodeContainer';
import Input from './components/Input';
import Navbar from './components/Navbar';

function App() {
  const [problem, setProblem] = useState();
  // const [inputValue, setInputValue] = useState([]);
  const [algorithm, setAlgorithm] = useState("");
  const year = new Date().getFullYear();

  return (
    <div className="App">
      <Navbar setProblem={setProblem} />
      <Input />
      <AlgoButtons algoType={problem} setAlgorithm={setAlgorithm} />
      <div className="my-container">
        <Chart />
        <CodeContainer algorithm={algorithm} />
      </div>
      <footer>Copyright @ Vikas Choubey, India, {year}</footer>
    </div>
  );
}

export default App;
