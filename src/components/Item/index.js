import React from "react";
import "../../styles/style.css";
import Count from "../Count";
//import { getItemDetails } from "../../helpers/getItemDetail";

export const Item = ({ tittle, author, image, price, stock }) => {

  return (
    <div className="cardContainer card">
      <div className="cardImgContainer card-img-top">
        <img src={image} alt="" className="cardImg" />
      </div>
      <div className="cardTittle">{`${tittle} - ${author}`}</div>
      <div className="cardText">${price}U$D</div>
      <div className="cardFooter">
        <Count initial={0} stock={stock} /> 
        <button className="cardBtn btn">
            Book details
        </button>                                              
      </div>
      {/* <button className="cardBtn btn" onClick={toggleDetails}>
        {isExpanded ? "Close details" : "View details"}
      </button>
      {isExpanded &&
        (loading ? (
          <p>Loading...</p>
        ) : (
          <div className="cardDetails">
            <div className="cardText">{itemDetails.edition}</div>
            <div className="cardText">{itemDetails.publication}</div>
            <div className="cardText">{itemDetails.format}</div>
          </div>
        ))} */}
    </div>
  );
};
