import React, { useState } from "react";
import "../../styles/style.css";
import Count from "../Count";
import { getItemDetails } from "../../helpers/getItemDetail";

export const Item = ({ tittle, author, image, price, stock }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemDetails, setItemDetails] = useState();
  const [loading, setLoading] = useState(false);

  const toggleDetails = () => {
    // Deberia al clicker mostrar los detalles del producto
    setIsExpanded(!isExpanded);

    const getFetchItemDetails = async () => {
      try {
        setLoading(true);
        const itemDetails = await getItemDetails();
        setItemDetails(itemDetails);
      } catch {
        console.error("Couldn't get the item details :(");
      } finally {
        setLoading(false);
      }
    };

    !itemDetails && getFetchItemDetails();
  };

  return (
    <div className="cardContainer col-md-4">
      <div className="cardImg card-img-top">
        <img src={image} alt="" className="w-100" />
      </div>
      <div className="cardTittle">{`${tittle} - ${author}`}</div>
      <div className="cardText">${price}U$D</div>
      <div className="cardFooter">
        <Count initial={0} stock={stock} />
      </div>
      <button className="cardBtn btn" onClick={toggleDetails}>
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
        ))}
    </div>
  );
};
