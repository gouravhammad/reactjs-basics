import React from "react"

const Child1 = ({ 
    salary,
    incrementSalary = () => {}
}) => {

    console.log('# Child1 component render')

    return (
        <div>
            <p>Child 1 Component</p>
            <p>Salary: {salary}</p>
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    )
}

export default React.memo(Child1)