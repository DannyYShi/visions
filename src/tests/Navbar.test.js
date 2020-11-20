import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../NavBar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

describe(`Navbar`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Navbar />
            </Router>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
})