import React from "react";
import "./CryptoCard.css";

const SkeletonLoader = () => {
    return (
        <div className='skeleton_loader'>

            {
                Array.from({ length: 3 }).map((_, index) => <div className='card skeleton' key={index}>
                    <div className='card_image skeleton_image'></div>
                    <div className='card_info'>
                        <h2 className='skeleton_text skeleton_title'></h2>
                        <h3 className='skeleton_text skeleton_price'></h3>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SkeletonLoader;