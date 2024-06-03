import { combineReducers, createStore } from 'redux'

// -------------- Cake Reducer --------------

const CREATE_CAKE = 'CREATE_CAKE'

const cakeOrder = () =>{
    return {
        type: CREATE_CAKE,
        payload: 1
    }
}

const initialCakeState = {
    noOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CREATE_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - action.payload
        }
        default: return state
    }
}

// -------------- IceCream Reducer --------------

const CREATE_ICE_CREAM = 'CREATE_ICE_CREAM'

const initialIceCreamState = {
    noOfIceCreams: 20
}

const iceCreamOrder = () =>{
    return {
        type: CREATE_ICE_CREAM,
        payload: 1
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case CREATE_ICE_CREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams - action.payload
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

console.log('Initial State: ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State: ', store.getState())
})

// After unsubribe, you wan't see logs, but dispatch can still work
//unsubscribe()



const ReduxMultipleReducerDemo = () => {

    const { dispatch } = store || {}
    
    const handleCakeOrder = () => {
        dispatch(cakeOrder())
    }

    const handleIceCreamOrder = () => {
        dispatch(iceCreamOrder())
    }

    return (
        <div>
            <h2>Redux Demo</h2>
            <button onClick={handleCakeOrder}>Take Cake Order</button>
            <button onClick={handleIceCreamOrder}>Take IceCream Order</button>
        </div>
    )
}

export default ReduxMultipleReducerDemo