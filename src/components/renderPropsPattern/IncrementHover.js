import React from "react"

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

export default IncrementHover