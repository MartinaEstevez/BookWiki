import React, { useState } from "react";

const Count = ({ initial, stock, onAdd }) => {
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
  const Add = () => {
    onAdd(count);
  };

  return (
    <div style={{ width: 300, margin: "auto", backgroundColor: "lightgray" }}>
      <p style={{ fontFamily: "sans-serif" }}>Count</p>
      <div
        className="border"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <button
          className="btn"
          style={{ marginRight: 50, color: "blue", fontSize: 25 }}
          onClick={increment}
        >
          +
        </button>
        <p style={{ marginBottom: 0 }}>{count}</p>
        <button
          className="btn"
          style={{ marginLeft: 50, color: "blue", fontSize: 25 }}
          onClick={decrement}
        >
          -
        </button>
      </div>
      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={Add}
      >
        Add
      </button>
    </div>
  );
};

export default Count;
