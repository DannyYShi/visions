import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from '../CartContext';
import ContactUs from '../Pages/ContactUs';

describe(`App`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ContextProvider>
                <Router>
                    <ContactUs />
                </Router>
            </ContextProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
