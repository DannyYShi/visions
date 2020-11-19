import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./Shop.css";
import config from '../config'
/*
Things to consider: 
1. MOBILE-FIRST DESIGN: horizontal header, one column, one photo 
2. TABLET-DESIGN: horizontal header, grid-style, two/three columns? 
3. DESKTOP-DESIGN: vertical header on the left, grid-style, three columns 

FUNCTIONALITY: 
1. Able to click icon to go to cart 
2. Renders cards of each item --> get all (optional feature: able to sort by tags)
3. multiple pages of items? 
*/

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const itemsResponse = await fetch(config.API_ENDPOINT);
      const itemsData = await itemsResponse.json();
      setItems(itemsData);
    };
    loadData();
  }, []);



  return (
    <main className="photos-page">
      <div className="list-items">
        {items.map((item) => (
          <Item key={item.item_id} id={item.item_id} items={item} />
        ))}
      </div>
    </main>
  );
}
