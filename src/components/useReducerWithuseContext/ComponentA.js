import React, { useContext } from "react"
import { CountContext } from "../../App"

const ComponentA = () => {

    const countContext = useContext(CountContext)
    const { counter, dispatch } = countContext || {}

    return (
        <div>
            <h2>ComponentA Counter: {counter?.counter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ComponentA