//This code is a JavaScript code snippet that sets up a React application with Redux and React
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';  //library used to show toast notifications in the application.
import { BrowserRouter as Router } from 'react-router-dom'; //provides routing functionality for the application
//function used to create a Redux store
import { createStore } from 'redux'; 
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

//This creates the Redux store by calling createStore with contactReducer as the reducer function with DevTools extension 
const store = createStore(contactReducer, composeWithDevTools());

//This function creates a root element for the React application
const root = createRoot(document.querySelector('#root'));

root.render(
    //Provider allows React components to access the Redux store and dispatch actions.
    <Provider store={store}>
        {/* Router enables routing functionality */}
        <Router>
            {/* the main component App will be rendered inside the <Router> and <Provider> components. */}
            <App />
        </Router>
    </Provider>
);