import React from 'react'
import ReactDOM from 'react-dom'
import Item from '../Item/Item';
import { BrowserRouter as Router } from 'react-router-dom'


describe(`Item`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const item = {
            item_id: 2,
            item_name: "Ocean",
            img_file: 'ocean.jpg',
            item_price: 35,
            item_description: "A picture of the ocean that I took in California.",
        }
        ReactDOM.render(
            <Router>
                <Item id={item.item_id} items={item} />
            </Router>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
})