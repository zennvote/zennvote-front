import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { polyfill } from './polyfills';

import './root.scss';

polyfill();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);