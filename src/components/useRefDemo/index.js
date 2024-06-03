import { useEffect, useRef, useState } from "react"

const UseRefDemo = () => {

    const [counter, setCounter] = useState(0)
    const inputRef = useRef(null)
    const counterRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        let intervalId = setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, 1000 )

        counterRef.current = intervalId

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const handleStopCounter = () => {
        // There is no way to clearInterval using this function, we will need to use useRef to clear it.
        console.log("# counterRef: ", counterRef)
        clearInterval(counterRef.current)
    }

    return (
        <div> 
            <p>useRef Hook Demo</p>
            <input ref={inputRef} type="text" placeholder="Focus using useRef()" /> <br/>

            
            Counter: {counter}
            <button onClick={handleStopCounter}>Stop Counter</button>
        </div>
    )
}

export default UseRefDemo