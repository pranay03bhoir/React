import { useEffect, useState } from "react";
import "./MouseTracker.css";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMovement = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMovement);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  // Calculate the position of the tracker dot
  const dotStyle = {
    position: 'fixed',
    left: `${mousePosition.x - 15}px`,
    top: `${mousePosition.y - 15}px`,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'rgba(100, 108, 255, 0.7)',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: isHovered ? 'scale(1.5)' : 'scale(1)',
    transition: 'transform 0.2s ease',
    boxShadow: '0 0 15px rgba(100, 108, 255, 0.5)'
  };

  return (
    <div className="mouse-tracker-container">
      <div 
        className="tracker-dot" 
        style={dotStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <div className="position-display">
        <h2 className="title">Mouse Position Tracker</h2>
        <div className="coordinates">
          <div className="coordinate">
            <span className="coordinate-label">X:</span>
            <span className="coordinate-value">{mousePosition.x}</span>
          </div>
          <div className="coordinate">
            <span className="coordinate-label">Y:</span>
            <span className="coordinate-value">{mousePosition.y}</span>
          </div>
        </div>
        <p className="hint">Move your mouse around to see the coordinates change</p>
      </div>
    </div>
  );
}

export default MouseTracker;
