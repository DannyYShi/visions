import React, { useState } from "react";

const Context = React.createContext()

function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.item_id !== id))
    }

    function resetCart() {
        setCartItems([])
    }

    console.log(cartItems)

    return (
        <Context.Provider value={{ addToCart, removeFromCart, cartItems, resetCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }