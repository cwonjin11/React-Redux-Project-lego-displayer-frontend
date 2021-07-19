// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'   //access to our store
// import store from './redux/store'
// import thunk from 'redux-thunk'



// import './index.css';
// import App from './App';

// import reportWebVitals from './reportWebVitals';




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';


// document.addEventListener("click", (e) => {
//   console.log("You've just clicked on 👀👃🏼👀", e.target)
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>  {/* StricMode = make sure all components start with capital letter, conventions or standards are followed etc. Good to practice with strict mode */} 
    <Provider store={store}> <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
