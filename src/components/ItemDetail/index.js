import React from "react";
import { useParams } from "react-router-dom";
import Count from "../Count";

const ItemDetail = ({ product }) => {
  const { detailId } = useParams();
  console.log(detailId);
  const onAdd = (item) => console.log(item);
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
          <Count initial={1} stock={10} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
