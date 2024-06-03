import React from "react"
import ComponentC from "./ComponentC"
import UserContext from "./UserData"

class ComponentB extends React.Component {
    
    static contextType = UserContext

    render() {
        return (
            <div>
                <h2>Component B {this.context}</h2>
                <ComponentC />
            </div>
        )
    }

}

export default ComponentB