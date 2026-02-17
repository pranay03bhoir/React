import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/store/features/counterSlice.js";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);
  return (
    <>
      <div className={`flex justify-center flex-col pt-4`}>
        <h1 className={`mx-auto text-3xl font-mono font-bold mb-5`}>{count}</h1>
        <div className={`flex justify-center gap-3`}>
          <button
            onClick={() => dispatch(increment())}
            className={`p-2 border rounded-lg hover:bg-gray-200`}
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className={`p-2 border rounded-lg hover:bg-gray-200`}
          >
            Decrement
          </button>
          <input
            type={`number`}
            className={`p-2 border rounded-lg `}
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
          <button
            onClick={() => dispatch(incrementByAmount(num))}
            className={`p-2 border rounded-lg hover:bg-gray-200`}
          >
            Increment By Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
