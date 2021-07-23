
import React from 'react';          // we are importing React object from the 'react' library
import ReactDOM from 'react-dom';   // library that is responsible for the virtual DOM 
import './index.css';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';

import App from './App';

// document.addEventListener("click", (e) => {
//   console.log("You've just clicked on 👀👃🏼👀", e.target)
// })


//this one is for dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//need to create store for redux => createStore 1. reducer, 2. dev tools, 3. thunk
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//rootReducer : import our reducers and give us access for our store.
//composeEnhancers : to access to our dev tools

ReactDOM.render(
  <React.StrictMode>  {/* StricMode = make sure all components start with capital letter, conventions or standards are followed etc. Good to practice with strict mode */} 
    <Provider store={store}> {/* wrap Provider pass in store as props around App to access to our store  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
