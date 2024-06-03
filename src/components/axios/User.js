import axios from "axios"
import React from "react"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            hasError: false
        }
    }

    componentDidMount() {
        // GET REQUEST
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            console.log("# Success:", result)
            this.setState({
                result: result?.data || []
            })
        })
        .catch(error => {
            console.log("# ERROR: ", error)
            this.setState({
                hasError: true
            })
        })


        // POST REQUEST
        let payload = {}
        axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(result => {
            console.log("# Success:", result)
        })
        .catch(error => {
            console.log("# ERROR: ", error)
        })
    }

    render() {
        return (
            <div>
                <h2>User Component, Post List:</h2>
                {this.state.result.map((item, index) => <p key={`posts_${index}`}>{item.title}</p>)}
                {this.state.hasError && <p>Error in fetching data</p>}
            </div>
        )
    }
}

export default User