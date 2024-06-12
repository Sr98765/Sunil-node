// src/Counter.js
import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="counter-btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
