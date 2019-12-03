import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../index';

it('renders without crashing', () => {
  const span = document.createElement('span');
  ReactDOM.render(<Button />, span);
  ReactDOM.unmountComponentAtNode(span);
});
