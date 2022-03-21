import React from "react";
import "../../styles/style.css";
import { useNavigate } from "react-router-dom";
//import { getItemDetails } from "../../helpers/getItemDetail";

export const Item = ({ id, tittle, author, image }) => {
  const navigate = useNavigate();

  return (
    <div className="cardContainer card">
      <div className="cardImgContainer card-img-top">
        <img src={image} alt="" className="cardImg" />
      </div>
      <div className="cardTittle">{`${tittle} by ${author}`}</div>
      <div className="cardFooter">
        <button
          className="cardBtn btn"
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        >
          Book details
        </button>
      </div>
    </div>
  );
};
