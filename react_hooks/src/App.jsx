import './App.css'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => Math.max(0, prev - step));
  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    setStep(value > 0 ? value : 1);
  };

  return (
    <div className="app">
      <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        
        <div className="controls">
          <div className="step-control">
            <label htmlFor="step">Step:</label>
            <input 
              id="step"
              type="number" 
              min="1"
              value={step} 
              onChange={handleStepChange}
              className="step-input"
            />
          </div>
          
          <div className="button-group">
            <button 
              onClick={increment}
              className="btn btn-primary"
            >
              + {step}
            </button>
            <button 
              onClick={decrement}
              disabled={count <= 0}
              className={`btn ${count <= 0 ? 'btn-disabled' : ''}`}
            >
              - {step}
            </button>
          </div>
          
          <button 
            onClick={() => setCount(0)}
            className="btn btn-reset"
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
