import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div className="bannerContainer container">
      <div className="bannerHeader">
        <p>
          BookWiki helps you find interesting new reads that are popular today
        </p>
      </div>
      <div className="bannerFooter">
        <div className="bannerText">
          <p>Start by looking through the varity of books in our page</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
