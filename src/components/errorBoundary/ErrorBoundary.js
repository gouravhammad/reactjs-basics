import React from "react"

class ErrorBoundary extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // If this component or any children throw error, this method will be called
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    // Use to logs error, use as error reporting system
    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return (
            this.state.hasError ? 
            <h2>Something Went Wrong</h2>: 
            this.props.children
        )
    }

}

export default ErrorBoundary