import "./App.css";
import { useEffect, useState } from "react";

// useEffect hook in React lets you run code automatically
// when something changes or when a component loads
// It's like setting a task to happen after the screen updates or when a certain data is ready.
// SYNTAX:
// useEffect(() => {
//   //code to run
// }, [dependency]);

// useEffect(() => {}) // Runs on every render.
// useEffect(() => {},[]) // Runs only once after the initial render.
// useEffect(() => {},[]) // Runs on initial render and when the count value changes.
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count + 1}`;
    console.log("useEffect has been triggered");
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>useEffect Hook</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </>
  );
}

export default App;
