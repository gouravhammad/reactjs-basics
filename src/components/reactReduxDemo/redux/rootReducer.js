import { combineReducers } from "redux";
import { reducer as cakeReducer } from "./cake/reducer";
import { reducer as iceCreamReducer } from "./iceCream/reducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})