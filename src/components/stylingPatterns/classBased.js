import React from "react"
import './classBased.css'

class ClassBased extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Gourav'
        }
    }

    render() {
        return (
            <h2 className="heading">Class Based CSS</h2>
        )
    }
}

export default ClassBased