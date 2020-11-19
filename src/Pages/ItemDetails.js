import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import config from '../config'
import './ItemDetails.css';
import { Context } from '../CartContext'



// This page will be a form for users to see details and choose:
// Size
// Quanitity
// And ultimately be able to add to cart

/* 
Navigation requirements: 
1. Able to go back to shop 
2. Add to cart does NOT take people directly to the cart 
3. Pop up to confirm that item has been added to the cart? 
*/

/* 
Validation requirements: 
1. Need to make sure that before adding to cart, that they put in value for what size they want 
2. Set default quantity to 1 
*/

/* 
Things to consider: 
1. Price needs to update with size
2. Price only needs to be there per unit
3. Do I want to do multiple views of the photo? NO, maybe later. 
4. Running footer that shows how many items in cart and total price of cart? MAYBE 
*/

export default function ItemDetails(props) {
  const [item, setItem] = useState({});
  const { addToCart } = useContext(Context)

  useEffect(() => {
    const loadData = async () => {
      const itemID = props.match.params.item_id
      const itemResponse = await fetch(`${config.API_ENDPOINT}/${itemID}`);
      const itemData = await itemResponse.json();
      setItem(itemData)
    };
    loadData();
  }, []);

  const [quantity, setQuantity] = useState('1')

  function handleChange(e) {
    setQuantity(e.target.value)
  }


  return (
    <div className="details-page">
      <Link to='/shop'>
        <button>Back to shop</button>
      </Link>
      <h1>ITEM DETAILS</h1>
      <div className="details" >

        <img
          className='image'
          src={`/images/${item.img_file}`}
          alt={item.item_name}
        />

        <div className='box'>

          <div className='row'>
            <h2>{item.item_name}</h2>
            <span>{"$" + item.item_price}</span>
          </div>

          <p>{item.item_description}</p>

          <Link className='cart' to='/cart' onClick={() => addToCart(item)}>
            ADD TO CART
            </Link>


        </div>

      </div>
    </div>
  );
}
