import React from "react"

// Component
import LifecycleB from "./LifecycleB.js"

class LifecycleA extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Gourav'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate') 
        return null
    }
    
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    
    changeState = () => {
        this.setState({
            name: 'Legend'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                Name: {this.state.name}
                <h2>LifecycleA</h2>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA