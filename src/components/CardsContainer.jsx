import React from "react";
import CommonCard from "./CommonCard";
import "./CardsContainer.css";

const CardsContainer = ({ cardsInfo }) => {
  return (
    <div className="cards-container">
      <h1 className="heading">Cards Gallery</h1>
      <div className="cards-grid">
        {cardsInfo.map((curVal, id) => (
          <CommonCard key={id} myData={curVal} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
