import { combineReducers } from "redux";
import productReducer from "./productReducer"

const reducers = combineReducers({
  productState: productReducer
})

export default reducers;