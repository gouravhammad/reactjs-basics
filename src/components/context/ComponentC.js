import React from "react"
import { UserContextConsumer } from "./UserData"

class ComponentC extends React.Component {
    render() {
        return (
            <UserContextConsumer>
                {(name) => {
                    return (
                        <h2>Component C {name}</h2>
                    )
                }}
            </UserContextConsumer>
        )
    }

}

export default ComponentC