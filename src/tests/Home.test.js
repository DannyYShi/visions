import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from '../CartContext';
import Home from '../Pages/Home';

describe(`App`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ContextProvider>
                <Router>
                    <Home />
                </Router>
            </ContextProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
