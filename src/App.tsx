import React from 'react';
import './App.css';
import BarCharts from './components/BarCharts';
import ScatterPlot from './components/ScatterPlot';

function App() {
  return (
    <div className="App">      
      <div className='chart'>
      <ScatterPlot />
      </div>
      <div className='chart'>
        <BarCharts />
      </div>
      
    </div>
  );
}

export default App;
