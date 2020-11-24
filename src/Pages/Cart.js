import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from '../CartContext';
import './Cart.css'
import './ItemDetails.css'


/*
THINGS TO CONSIDER:
1. Lists items that have been added to cart 
2. If quanitity for item updated, don't add a new item, only update the quantity
3. Able to remove item from cart 
4. Able to update quantity from cart 
5. Items in cart are unique to size and photo 
*/

export default function Cart() {

  const { removeFromCart, resetCart, cartItems, increment, decrement, total } = useContext(Context)

  if (cartItems.length === 0) {
    return <h1 style={{ textAlign: 'center', marginTop: '5em' }}>Nothing is in the cart.</h1>
  }
  else {

    return (
      <main className="cart-page">
        <h1>SHOPPING CART</h1>
        <div className='shopping-cart'>
          {cartItems.map((item) => (
            <div key={Math.random()} className='details cart'>
              <img src={`/images/${item.img_file}`}
                alt={item.item_name}
                title={item.item_name} />
              <div className='cart-box'>
                <div className='cart-row'>
                  <h2>{item.item_name}</h2>
                  <span>${item.item_price}</span>
                </div>
                <p>{item.item_description}</p>
                <div className="amount">
                  <button className="count" onClick={() => decrement(item.item_id)}>-</button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increment(item.item_id)}>+</button>
                </div>

                <div className='delete' onClick={() => removeFromCart(item.item_id)}>
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <Link to='/checkout'>
            <button>Place Order</button>
          </Link>
          <h3>Total: ${total}</h3>
        </div>
      </main>
    );
  }

}
