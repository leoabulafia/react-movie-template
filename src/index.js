import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import { store } from 'store';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();
registerServiceWorker();
