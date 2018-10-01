import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index';

const homeContainer = document.getElementById('home-container')
const store = createStore(
    reducer, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// HOC
render(
    <Provider store={store}>   
        <Home />
    </Provider>, 
    homeContainer
)