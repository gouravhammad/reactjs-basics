import React from "react"

class UserForm extends React.Component {
    
    constructor(props) {
        super(props)

        if(props.error) {
            throw new Error('Error in constructor of UserForm')
        }
    }

    render() {
        return (
            <h2>User Form</h2>
        )
    }

}

export default UserForm