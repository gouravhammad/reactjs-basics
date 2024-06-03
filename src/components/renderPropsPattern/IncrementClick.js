import React from "react"

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

export default IncrementClick