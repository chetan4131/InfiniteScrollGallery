import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  const skeletonArray = Array.from({ length: 3 }); 
  return (
    <div className="skeleton-container">
      {/* <h1 className="heading">Loading...</h1> */}
      <div className="skeleton-grid">
        {skeletonArray.map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-id shimmer"></div>
            <div className="skeleton-title shimmer"></div>
            <div className="skeleton-description shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
