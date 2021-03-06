import React from "react";
import { useState } from "react";
import Count from "../Count";
import { useCartContext } from "../CartContext";
import { Link  } from "react-router-dom";
import "./style.css";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(null)
  const { addItem } = useCartContext()

  const onAdd = cant =>{
    setCount(cant)
    addItem({ ...product, quantity: cant })
  }

  return (
    <div>
      <div className="detailContainer container">
        <div className="detailImgContainer">
          <img src={product.image} alt="" className="detailImg" />
        </div>
        <div className="detailInfoContainer">
          <div className="detailTittle">{`${product.tittle}`}</div>
          <div className="detailAuthor">{`by ${product.author}`}</div>
          <div className="detailPrice">${product.price}U$D</div>
          <div className="detailCategory">{`Book category: ${product.category}`}</div>
          <div className="detailResume">
            <p>{`${product.sinopsis}`}</p>
          </div>
          { count ?
            <Link to='/cart'>
              <button className='btn btn-outline-primary'>Go to Cart</button>
            </Link> 
          :
            <Count initial={1} stock={10} onAdd={onAdd} />
        }

          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
