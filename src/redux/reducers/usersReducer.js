// lets pretend userReducers
// eslint-disable-next-line
export default ( state = [{id:1, name:"wonjin" }, {id:2, name:"jason"}], action ) => {
    switch(action.type) {
        case "FETCH_USERS":
            return [...action.payload]
        case "ADD_USER":
            return [...state, action.payload]
        case "REMOVE_USER":
            let updatedUsers = state.filter(user => user.id !== action.payload)
            return [...updatedUsers]
        case "EDIT_USER":
            let usersAll = [...state]
            usersAll.findIndex(user => user.id === action.payload.id )
            return  [...usersAll, action.payload]
        default:
            return state
    }
}