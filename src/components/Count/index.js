import React, { useState } from "react";
import "../../styles/style.css";

const Count = ({ initial, stock,}) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  

  return (
    <div className="container containerCount">
      <div className="border borderCount">
        <button className="btn btnCount" onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <p className="textCount">{count}</p>
        <button className="btn btnCount" onClick={increment}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default Count;
