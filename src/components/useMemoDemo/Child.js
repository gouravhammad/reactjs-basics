import React from "react"

const Child = ({ 
    salary,
    incrementSalary = () => {}
}) => {

    console.log('# Child component render')

    return (
        <div>
            <p>Child Component</p>
            <p>Salary: {salary}</p>
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    )
}

export default Child