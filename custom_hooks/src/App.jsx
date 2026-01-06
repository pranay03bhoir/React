import "./App.css";
import useCounter from "./useCounter.jsx";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <div>
        <h1>count {count}</h1>
        <button onClick={increment}>Increment + </button>
        <button onClick={decrement}>Decrement - </button>
        <button onClick={reset}>reset </button>
      </div>
    </>
  );
}

export default App;
