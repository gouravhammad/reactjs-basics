import React from "react"
import ComponentC from "./ComponentC"

class ComponentB extends React.Component {
    render() {
        return (
            <div>
                <h2>Component B</h2>
                <ComponentC />
            </div>
        )
    }
}

export default ComponentB