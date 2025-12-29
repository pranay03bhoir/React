import React, { useState, useEffect } from "react";
import MouseTracker from "./MouseTracker.jsx";
import "./ParentComponent.css";

const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleComponent = () => {
    setIsTransitioning(true);
    // Wait for the fade-out animation to complete before toggling
    setTimeout(() => {
      setShowComponent((prev) => !prev);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Interactive Mouse Tracker</h1>
        <p className="subtitle">A smooth and responsive mouse position tracker</p>
        
        <button 
          className={`toggle-button ${showComponent ? 'active' : 'inactive'}`}
          onClick={toggleComponent}
        >
          {showComponent ? (
            <>
              <span className="button-icon">👋</span>
              Hide Tracker
            </>
          ) : (
            <>
              <span className="button-icon">👀</span>
              Show Tracker
            </>
          )}
        </button>
      </div>
      
      <div className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {showComponent && <MouseTracker />}
      </div>
      
      <footer className="footer">
        <p>Move your cursor around to see it in action!</p>
      </footer>
    </div>
  );
};

export default ParentComponent;
