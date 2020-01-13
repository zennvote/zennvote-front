import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { polyfill } from 'es6-promise';

import './root.scss';

polyfill();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);