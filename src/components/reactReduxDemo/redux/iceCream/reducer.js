import { BUY_ICE_CREAM } from "./types"

const initialState = {
    totalIceCream: 10
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM : return {
            ...state,
            totalIceCream: state.totalIceCream - action.payload
        }
        default: return state
    }   
}