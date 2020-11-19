import React, { useContext } from "react";
import { Context } from '../CartContext';
import './Cart.css'


/*
THINGS TO CONSIDER:
1. Lists items that have been added to cart 
2. If quanitity for item updated, don't add a new item, only update the quantity
3. Able to remove item from cart 
4. Able to update quantity from cart 
5. Items in cart are unique to size and photo 
*/

export default function Cart() {

  const { removeFromCart, resetCart, cartItems } = useContext(Context)
  // const getTotalCost = (shoppingCart) => {
  //   return shoppingCart.reduce((totalCost, { item_price: itemPrice }) => totalCost + parseFloat(itemPrice), 0)
  // }
  //const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
  function handleSubmit(e) {
    e.preventDefault()
    alert('Your order has been placed. Thank you!')
    resetCart()
  }

  return (
    <main className="cart-page">
      <h1>SHOPPING CART</h1>
      <div className='cart'>
        {cartItems.map((item) => (
          <div key={Math.random()} className='cart-item'>
            <img src={`/images/${item.img_file}`}
              alt={item.item_name}
              title={item.item_name} />
            <h3>{item.item_name}</h3>
            <h4>quantity</h4>
            <h4>{item.item_price}</h4>
            <button onClick={() => removeFromCart(item.item_id)}>Remove</button>
          </div>
        ))}
      </div>
      <h1 className='total-cost'>TOTAL: </h1>
      <div className='order-button'>
        <button type='submit' onClick={handleSubmit}>PLACE ORDER</button>
      </div>
    </main>
  );
}
