import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="booksContainer">
          <Routes>
              <Route path='/' element={<ItemListContainer greeting='HOME' />} />                                        
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />                                        
              <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/*' element={ <Navigate to='/' replace /> } /> 
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
