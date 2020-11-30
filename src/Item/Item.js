import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


// This component will be a card that once clicked, will link to the details page

/* 
Things to consider: 
1. CARD 
2. Main components to each card: PHOTO, NAME OF ITEM, PRICE
3. Clicking on the card must link to ITEM DETAILS page

Design-wise: 
- no borders 
- hover interaction 
*/

export default function Item(props) {
  return (
    <div className="item">
      <Link className='item_link' to={`/shop/${props.items.item_id}`}>
        <div className="item_card">
          <img
            className='item_image'
            src={`images/${props.items.img_file}`}
            alt={props.items.item_name}
            title={props.items.item_name}
          />
        </div>
        <div className="box">
          <div className='row'>
            <h2>{props.items.item_name}</h2>
            <span>{"$" + props.items.item_price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
    </div >
  );
}
