import React from "react"
import ComponentB from "./ComponentB"

class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <h2>Component A</h2>
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA