import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store.js";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import state from "./redux/state.js";

ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
                <App/>
        </Provider>
</BrowserRouter>, document.getElementById('root'));
