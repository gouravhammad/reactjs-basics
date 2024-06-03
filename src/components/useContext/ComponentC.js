import React, { useContext } from "react"
import { UserContext } from "../../App"

const ComponentC = () => {
    let username = useContext(UserContext)
    return (
        <h2>Component C {username}</h2>
    )    
}

export default ComponentC