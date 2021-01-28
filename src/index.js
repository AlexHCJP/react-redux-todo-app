import React from 'react'
import {render} from 'react-dom'
import { App } from './App'

import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from './reducer';

import 'antd/dist/antd.css';
import '../assets/global'


const store = createStore(
    reducer,
    composeWithDevTools()
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
    
)

render(app, document.getElementById('root'))