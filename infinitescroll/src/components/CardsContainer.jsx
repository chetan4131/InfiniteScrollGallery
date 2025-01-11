import React from "react";
import CommonCard from "./CommonCard";
import './CardsContainer.css'
const CardsContainer = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <CommonCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
