import { useReducer } from "react"

const ReducerDemo = () => {
    let initialState = 0

    const reducer = (state, action) => {
        switch(action) {
            case 'increment': return state + 1
            case 'decrement': return state - 1
            case 'reset': return initialState
            default: return state
        }
    }

    const [counter, dispatch] = useReducer(reducer, initialState)




    let initialStateTwo = { counter: 0 }

    const reducerTwo = (state, action) => {
        switch(action.type) {
            case 'increment': return {
                ...state,
                counter: state.counter + action.value
            }
            case 'decrement': return {
                ...state,
                counter: state.counter - action.value
            }
            case 'reset': return {
                ...initialStateTwo
            }
            default: return state
        }
    }

    const [counterTwo, dispatchTwo] = useReducer(reducerTwo, initialStateTwo)

    return (
        <div>
            <h2>ReducerDemo</h2>
            Counter 1: {counter}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            Counter 2: {counterTwo?.counter}
            <button onClick={() => dispatchTwo({ type: 'increment', value: 5 })}>Increment</button>
            <button onClick={() => dispatchTwo({ type: 'decrement', value: 5 })}>Decrement</button>
            <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ReducerDemo