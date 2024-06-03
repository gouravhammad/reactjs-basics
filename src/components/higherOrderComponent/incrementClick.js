import React from "react"
import withCounter from "./withCounter"

class IncrementClick extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter: {this.props.counter}</h2>
                <button onClick={this.props.onChange}>{this.props.buttonText}</button>
            </div>
        )
    }
}

export default withCounter(IncrementClick, 1)