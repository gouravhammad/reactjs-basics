import { useMemo, useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [age, setAge] = useState(100)
    const [salary, setSalary] = useState(0)

    console.log('# Parent component render')

    // const getTotalSumUptoAge = () => {
    //     console.log('# Complex function triggered')
    //     let total = 0
    //     for(let i = 0; i < age; i++) {
    //         total+= age
    //     }
    //     return total
    // }

    const totalSumUptoAge = useMemo(() => {
        console.log('# Complex function triggered')
        let total = 0
        for(let i = 0; i < age; i++) {
            total+= age
        }
        return total
    }, [age])

    const incrementSalary = () => {
        setSalary(salary+1)
    }

    return (
        <div>
            <p>Parent Component</p> <br/>
            {/* Total Sum of Ages: {getTotalSumUptoAge()} */}
            Total Sum of Ages: {totalSumUptoAge}
            <Child salary={salary} incrementSalary={incrementSalary} /> <br/>
        </div>
    )
}

export default Parent