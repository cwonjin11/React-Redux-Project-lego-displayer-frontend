

import { createStore } from 'redux'




const legos = [
    { id: 1, name: "lego1", item_number: 21056, pieces: 2022, price: 119.99},
    { id: 2, name: "lego2", item_number: 10020, pieces: 1025, price: 59.99}, 
    { id: 3, name: "lego3", item_number: 30000, pieces: 1222, price: 18.99}
  
  ]



function legoReducer(state = legos, action) {
    switch (action.type) {


      default:
        return state
    }
  }
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(legoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store
  //with a reducer, we are basically setting up logic that is going to manage what is coming back from your fetch
  // and it's setting state that is comming back from the fetches that you are going to be sending out into the world.   

//store is responsible for updating state