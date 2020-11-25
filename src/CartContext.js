import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    function addToCart(newItem) {
        if (cartItems.some(item => item.item_id === newItem.item_id)) {
            alert('This item is already in your cart!');
        }
        else {
            newItem['count'] = 1;
            setCartItems(prevItems => [...prevItems, newItem]);
            setTotal(total + newItem.item_price);
        };
    };

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.item_id !== id));
    };

    function resetCart() {
        setCartItems([]);
    };

    function increment(id) {
        cartItems.forEach(item => {
            if (item.item_id === id) {
                item.count += 1;
            }
        })
        setCartItems(cartItems);
        getTotal();
    };

    function decrement(id) {
        cartItems.forEach(item => {
            if (item.item_id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        });
        setCartItems(cartItems);
        getTotal();
    };

    function getTotal() {
        setTotal(cartItems.reduce((prev, item) => {
            return prev + (item.item_price * item.count);
        }, 0));

    };

    return (
        <Context.Provider value={{ addToCart, removeFromCart, cartItems, resetCart, increment, decrement, total }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };