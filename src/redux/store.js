import {combineReducers, legacy_createStore} from "redux"
import mainReducer from "./reducers/mainReducer"

const rootReducer = combineReducers({
    mainReducer
})

const store = legacy_createStore(
    rootReducer
)

export default store