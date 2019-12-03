import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from '../index';

it('renders without crashing', () => {
  const span = document.createElement('span');
  ReactDOM.render(<ColorPicker />, span);
  ReactDOM.unmountComponentAtNode(span);
});

