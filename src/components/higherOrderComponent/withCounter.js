import React from "react"

const withCounter = (OriginalComponent, incrementValue) => {

    class UpdateComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                counter: 0
            }
        }
    
        onChange = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + incrementValue
                }
            })
        }

        render() {
            return (
                <OriginalComponent
                    counter={this.state.counter}
                    onChange={this.onChange}
                    {...this.props}
                />
            )
        }
    }

    return UpdateComponent
}

export default withCounter