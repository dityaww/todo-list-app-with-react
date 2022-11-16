import { combineReducers, createStore } from "redux";
import todoReducer from "../reducers/todoReducer";

const AllReducers = combineReducers({
    todo: todoReducer
})

const store = createStore(AllReducers)

export default store