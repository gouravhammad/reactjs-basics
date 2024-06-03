import React, { useContext } from "react"
import { CountContext } from "../../App"

const ComponentC = () => {

    const countContext = useContext(CountContext)
    const { counter, dispatch } = countContext || {}

    return (
        <div>
            <h2>ComponentC Counter: {counter?.counter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 10 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ComponentC