import React from "react";
import './SkeletonLoader.css'; 

const SkeletonLoader = () => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="card skeleton" key={index}>
          <div className="skeleton-id"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;

