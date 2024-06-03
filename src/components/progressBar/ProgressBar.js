import { useEffect, useState } from 'react'
import './progressBar.css'

const ProgressBar = () => {

    let [percentage, setPercentage] = useState(0)


    useEffect(() => {
        window.setInterval(() => {
            setPercentage((prev) => {
                return prev + 1
            })
        }, 100)
    }, [])

    return (
        <div>
            <h2>Progress Bar {percentage}</h2>
            <div className='progressCtn'>
                <div className='filled' style={{ width: `${percentage}%` }}>1</div>
                <div className='unfilled' style={{ width: `${100 - percentage}%` }}>2</div>
            </div>
        </div>
    );
}

export default ProgressBar;