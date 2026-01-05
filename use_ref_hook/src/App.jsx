import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log("Component re-rendered");
  });

  const incrementStateCount = () => {
    setStateCount(prev => prev + 1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref Count: ${refCount.current}`);
  };

  const focusInputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#fff3cd";
    setIsFocused(true);
    
    // Reset focus effect after 2 seconds
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.style.backgroundColor = "#fff";
        setIsFocused(false);
      }
    }, 2000);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React useRef Demo</h1>
        <p className="subtitle">Understanding useRef Hook</p>
      </header>

      <div className="counters-container">
        <div className="counter-card">
          <h3>State Count</h3>
          <div className="counter-value">{stateCount}</div>
          <button 
            className="btn btn-state" 
            onClick={incrementStateCount}
            aria-label="Increment state counter"
          >
            Increment State Count
          </button>
          <p className="counter-note">Causes re-render</p>
        </div>

        <div className="counter-card">
          <h3>Ref Count</h3>
          <div className="counter-value">{refCount.current}</div>
          <button 
            className="btn btn-ref" 
            onClick={incrementRefCount}
            aria-label="Increment ref counter"
          >
            Increment Ref Count
          </button>
          <p className="counter-note">No re-render</p>
        </div>
      </div>

      <div className="input-section">
        <h3>Input Focus Demo</h3>
        <div className="input-group">
          <input 
            ref={inputRef} 
            type="text" 
            className={`input-field ${isFocused ? 'focused' : ''}`}
            placeholder="Click the button to focus" 
          />
          <button 
            className="btn btn-focus"
            onClick={focusInputHandler}
            aria-label="Focus the input field"
          >
            {isFocused ? 'Focused!' : 'Focus Input'}
          </button>
        </div>
        <p className="hint">
          The input will be highlighted when focused
        </p>
      </div>

      <footer className="app-footer">
        <p>useRef persists values across renders without causing re-renders</p>
      </footer>
    </div>
  );
}

export default App;
