import { BUY_CAKE } from "./types"

const initialState = {
    totalCake: 20
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            totalCake: state.totalCake - action.payload
        }
        default: return state
    }   
}