import React from "react";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home";
import ItemDetails from "./Pages/ItemDetails";
import Cart from "./Pages/Cart";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";
import OrderForm from "./Pages/OrderForm";

/*
THINGS TO CONSIDER: 
1. Where do I need to watch for state and will I need context
2. Forms and submit logic

DO I WANT TO DO: 
1. Do I want to make a landing page 
2. Do I want to make a sign up page 
*/

function App() {
  return (
    <div className="App">
      <NavBar className="app-navbar" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/shop/:item_id" component={ItemDetails} />
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path='/checkout'>
          <OrderForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
