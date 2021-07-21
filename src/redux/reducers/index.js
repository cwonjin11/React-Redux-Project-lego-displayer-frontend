import { combineReducers } from "redux";  //###// if we have more than one reducers, we need to combine.
import legos from './legoReducer'

import users from './usersReducer'



export default combineReducers({
    legos, users
})
