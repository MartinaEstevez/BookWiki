import React from "react";
import Count from "../Count";

export const Item = ({ title, author, image, price, stock }) => {
  const onAdd = (item) => console.log(item);

  return (
    <div
      className="card col-md-4"
      style={{ width: 170, margin: 50, display: "inline-block" }}
    >
      <div className="card-img-top">
        <img src={image} alt="" className="w-100" style={{ height: "240px" }} />
      </div>
      <div className="card-tittle">{`${title} - ${author}`}</div>
      <div className="card-text">{price}</div>
      <div className="card-footer" style={{ padding: 0 }}>
        <Count initial={0} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
};
