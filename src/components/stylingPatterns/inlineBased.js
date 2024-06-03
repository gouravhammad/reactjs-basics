import React from "react"

class InlineBased extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Gourav'
        }
    }

    style = {
        color: 'pink',
        fontSize: '30px'
    }

    render() {
        return (
            <h2 style={this.style}>Inline Based CSS</h2>
        )
    }
}

export default InlineBased