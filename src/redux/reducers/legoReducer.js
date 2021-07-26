// eslint-disable-next-line
export default ( state = [], action ) => {  console.log("inside reducer")//takes action and state and reduces it into a new state
    switch(action.type) {
        case "FETCH_LEGOS":
            return [...action.payload]  // similar to params in rails
        case "ADD_LEGO":  
            return [...state, action.payload]  //5. The reducer then returns a NEW version of our state which triggers any component that receives our redux state as props to re-render
        case "REMOVE_LEGO":
            let updatedLegos = state.filter(lego => lego.id !== action.payload) //lego id is not equal to action.payload
            return [...updatedLegos]  //spreading out updatedLegos 
        case "EDIT_LEGO":

            let legoAll = state.filter(lego => lego.id !== action.payload)
            return [...legoAll, action.payload]
            // or
            // let legosAll = [...state]
            // legosAll.findIndex(lego => lego.id === action.payload.id )
            // return  [...legosAll, action.payload]
        default:
            return state
    }
}

//my reducer is handling my redux store