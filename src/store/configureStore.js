import {createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import songReducer from "./reducer"
const rootReducer=combineReducers({
    data:songReducer
})
const configureStore=()=>{
    return createStore(rootReducer,applyMiddleware(thunk))

}
export default configureStore