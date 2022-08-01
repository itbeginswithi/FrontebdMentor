import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './styles/globals.scss';
import App from './App';
import {store} from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
  