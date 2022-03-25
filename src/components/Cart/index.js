import React from "react";
import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, emptyCart, substractItem, totalPrice } = useCartContext();
  console.log(cartList);
  return (
    <div className="container container-fluid">
      <div>
        {cartList.length > 0 ? 
          <div>
            <div className="cartContainerTittle">
              <h1 className="cartTittle">My Shopping Cart</h1>
            </div>
            <div className="cartContainer">
              <div className="leftContainer">
                <header className="cartHeader">
                  ({cartList.length})Items from BookWiki
                </header>
                {cartList.map((products) => (
                  <div className="cartItemContainer" key={products.id}>
                    <div className="cartItemImage">
                      <img src={products.image} alt="" className="cartImg" />
                    </div>
                    <div className="cartItemInformation">
                      <div className="cartItemTittle">{`${products.tittle} by ${products.author}`}</div>
                      <div className="cartItemPrice">${products.price}U$</div>
                      <div className="cartItemInStock">
                        quantity selected: {products.quantity}
                      </div>
                    </div>
                    <div className="cartBtnContainer">
                      <button
                        className={`btn btn-outline${
                          products.quantity === 1 ? "-danger" : "-success"
                        }`}
                        onClick={() => {
                          substractItem(products);
                        }}
                      >
                        {products.quantity === 1 ? "x" : "-"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rightContainer">
                <div className="orderContainer">
                  <div className="orderTittle">Order Summery</div>
                  <div className="orderText">
                    <p>Suptotal ({cartList.length} items)</p>
                    <p>${totalPrice()}U$</p>
                  </div>
                  <div className="orderText">
                    <p>Estimated shipping</p>
                    <p>Free</p>
                  </div>
                  <div className="orderText">
                    <p>Estimated taxed</p>
                    <p>$0,00</p>
                  </div>
                  <div className="totalPrice">
                    <p>Order Total:</p>
                    <p>${totalPrice()}U$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="emptyCartBtn">
              <button className="btn btn-outline-secondary" onClick={emptyCart}>
                Empty Cart
              </button>
            </div>
          </div>
         : 
          <div className="cartBanner">
            <div className="cartBannerHeader">
              <p className="cartBannerText">Your cart is empty. </p>
              <p className="cartBannerText">
                Start shopping through the varity of books in our page.{" "}
              </p>
            </div>
            <Link to="/home">
              <button className="cartBtn btn btn-outline-success">
                Shop Now
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
}

export default Cart;
