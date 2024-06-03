import React from "react"
import withCounter from "./withCounter"

class IncrementHover extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter: {this.props.counter}</h2>
                <button onMouseOver={this.props.onChange}>{this.props.buttonText}</button>
            </div>
        )
    }
}

export default withCounter(IncrementHover, 2)