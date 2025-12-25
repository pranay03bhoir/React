import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColour, setBackgroundColour] = useState("#fffff");
  const colours = [
    "#F54927",
    "#91A3C0",
    "#C09691",
    "#BBC091",
    "#03501D",
    "#500336",
    "#FB0193",
    "#FB6901",
    "#0193FB",
    "#01FB69",
  ];

  const handleColourChange = (colour) => {
    setBackgroundColour(colour);
  };
  return (
    <>
      <div style={{ backgroundColor: backgroundColour }}>
        <h1>Colour Picker</h1>
        <div className={`colour-palette`}>
          {colours.map((colour, index) => {
            return (
              <div
                key={index}
                className={`colour-box`}
                onClick={() => handleColourChange(colour)}
                style={{ backgroundColor: colour }}
              ></div>
            );
          })}
        </div>
        <div className={`custom-colour-picker`}>
          <input
            type={`color`}
            value={backgroundColour}
            onChange={(e) => handleColourChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
