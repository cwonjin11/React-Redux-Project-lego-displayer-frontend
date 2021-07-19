// eslint-disable-next-line
export default ( state = [], action ) => {
    switch(action.type) {
        case "FETCH_LEGOS":
            return [...action.payload]
        case "ADD_LEGO":
            return [...state, action.payload]
        case "REMOVE_LEGO":
            let updatedLegos = state.filter(lego => lego.id !== action.payload)
            return [...updatedLegos]
        case "EDIT_LEGO":
            let legosAll = [...state]
            legosAll.findIndex(lego => lego.id === action.payload.id )
            return  [...legosAll, action.payload]
        default:
            return state
    }
}