import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";

function App() {
  return (

        <div>
      <NavBar />
      <div className="booksContainer">
        <ItemListContainer greeting="Classics"/>
        <ItemDetailContainer/>
      </div>
      
    </div>
  );
}

export default App;
