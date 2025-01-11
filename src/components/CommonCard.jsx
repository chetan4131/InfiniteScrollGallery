import React from "react";
import "./CommonCard.css";

const CommonCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <div className="common-card">
      <p className="card-id">{id}</p>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{body}</p>
    </div>
  );
};

export default CommonCard;

