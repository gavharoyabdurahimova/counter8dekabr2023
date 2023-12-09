import { useState } from "react";
import './App.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="btn_count">
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

