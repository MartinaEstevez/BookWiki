import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Banner from './components/Banner';

function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="booksContainer">
          <Routes>
              <Route path='/home' element={<ItemListContainer greeting='HOME' />} />                                        
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />                                        
              <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
              <Route path='/*' element={ <Navigate to='/' replace /> } /> 
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
