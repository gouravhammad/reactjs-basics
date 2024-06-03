import { BUY_ICE_CREAM } from "./types"

export const buyIceCream = (quantity) => {
    return {
        type: BUY_ICE_CREAM,
        payload: quantity
    }
}