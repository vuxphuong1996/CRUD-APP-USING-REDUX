import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import myReducers from './Reducers/index'
import { FetchData } from './Action'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    myReducers,
    applyMiddleware(...middleware)
)

store.dispatch(FetchData())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter >
    ,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
