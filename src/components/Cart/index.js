import React from 'react'
import { useCartContext } from "../CartContext"


function Cart() {
    const { cartList, emptyCart } = useCartContext()
    console.log(cartList)
    return (
      <div className="container container-fluid">
        <div className='cartContainerTittle'>
          <h1>Cart</h1>
        </div>
        <div>
          { cartList.map(products => 
          <div className='cartItemContainer'>
            <div className="cartItemImage">
              <img src={products.image} alt="" className="cartImg" />
            </div>
            <div className="cartItemInformation">
              <div className="cartItemTittle">{`${products.tittle} by ${products.author}`}</div>
              <div className="cartItemPrice">${products.price}U$</div>
              <div className="cartItemInStock">quantity selected: {products.quantity}</div>
            </div>
          </div>) }
        </div>
        <button className="btn btn-outline-secondary" onClick={emptyCart}>Empty Cart</button>
      </div>
    )
}

export default Cart

  