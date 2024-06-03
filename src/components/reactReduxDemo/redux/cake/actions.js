import { BUY_CAKE } from "./types"

export const buyCake = (quantity) => {
    return {
        type: BUY_CAKE,
        payload: quantity
    }
}