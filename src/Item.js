import React from "react";

import "./Bar.css"
export const Item = ({ id, name, category, image, price ,description}) => {
 
 
  return (
 
      <div className="container_card">
        <span className="Card_name">{name}</span>
        <span className="Container_image">
          <img className="Card_image" src={image} alt={name} />
        </span>
        <span className="Card_price" >${price}</span>
         <span  className="Card_description"> {description}</span>   
      </div>
  );
};