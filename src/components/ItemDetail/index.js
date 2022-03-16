import React from 'react'
const ItemDetail = ({productDetail}) => {
    return (
      <div>
        <div className="cardContainer card">
          <p>Product Details</p>
          <div className="cardTittle">{`${productDetail.tittle} - ${productDetail.author}`}</div>
          <div className="cardText">${productDetail.price}U$D</div>
        </div>
          {/*<p>Product Details</p>
          <p>{productDetail.tittle}</p>
          <p>{productDetail.author}</p>
          <p>{productDetail.category}</p>
          <img> src={productDetail.image} className="cardImg"</img>*/}

      </div>
    )
  }
  
  export default ItemDetail
  