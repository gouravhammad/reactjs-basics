import React from "react"

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    onChange = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            this.props.render(this.state.counter, this.onChange)
        )
    }
}

export default Counter