import React from "react"

const Child2 = ({ 
    age, 
    incrementAge = () => {} 
}) => {

    console.log('# Child2 component render')

    return (
        <div>
            <p>Child 2 Component</p>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    )
}

export default React.memo(Child2)