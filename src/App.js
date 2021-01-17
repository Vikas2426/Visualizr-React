import React from 'react';
import './App.css';
import AlgoButtons from './components/AlgoButtons';
import ChartDisplay from './components/ChartDisplay';
import CodeContainer from './components/CodeContainer';
import Input from './components/Input';
import Navbar from './components/Navbar';

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="App">
        <Navbar />
        <Input />
        <AlgoButtons />
        <div className="my-container">
          <ChartDisplay />
          <CodeContainer />
        </div>
      </div>
      <footer>Copyright @ Vikas Choubey, India, {year}</footer>
    </>
  );
}

export default App;
