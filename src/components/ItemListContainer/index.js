import React, { useState } from "react";
import Tittle from "../Tittle";
import Count from "../Count";

const onAdd = (cant) => {
  console.log(cant);
};

const ItemListContainer = () => {
  return (
    <div style={{ width: 300, margin: "auto", alignContent: "space-around" }}>
      <Tittle
        tittle={"Tittle"}
        subtittle="Subtittle"
        greeting={() => console.log("Greeting")}
      />
      <Count initial={1} stock={9} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
