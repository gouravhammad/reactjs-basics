import { useCallback, useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

const Parent = () => {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    // With useCallback
    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary+1)
    }, [salary])


    // Without useCallback
    // const incrementAge = () => {
    //     setAge(age+1)
    // }

    // const incrementSalary = () => {
    //     setSalary(salary+1)
    // }

    console.log('# Parent component render')

    return (
        <div>
            <p>Parent Component</p> <br/>
            <Child1 salary={salary} incrementSalary={incrementSalary} /> <br/>
            <Child2 age={age} incrementAge={incrementAge} />
        </div>
    )
}

export default Parent