import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContextProvider } from '../CartContext';

describe(`App`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
