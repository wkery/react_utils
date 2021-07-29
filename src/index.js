import React from 'react';
import ReactDOM from 'react-dom';
import { adapter1 } from './utils/adapter';
import App from './App';
import './index.less';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// 使用rem适配方案
adapter1();
window.onresize = adapter1;