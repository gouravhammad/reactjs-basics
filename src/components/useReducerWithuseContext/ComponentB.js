import React, { useContext } from "react"
import { CountContext } from "../../App"

const ComponentB = () => {

    const countContext = useContext(CountContext)
    const { counter, dispatch } = countContext || {}

    return (
        <div>
            <h2>ComponentB Counter: {counter?.counter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ComponentB