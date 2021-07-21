// eslint-disable-next-line
export default ( state = [], action ) => {
    switch(action.type) {
        case "FETCH_LEGOS":
            return [...action.payload]  // similar to params in rails
        case "ADD_LEGO":
            return [...state, action.payload]
        case "REMOVE_LEGO":
            let updatedLegos = state.filter(lego => lego.id !== action.payload) //lego id is not equal to action.payload
            return [...updatedLegos]  //spreading out updatedLegos 
        case "EDIT_LEGO":
            let legosAll = [...state]
            legosAll.findIndex(lego => lego.id === action.payload.id )
            return  [...legosAll, action.payload]
        default:
            return state
    }
}