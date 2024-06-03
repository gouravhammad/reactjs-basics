import React from "react"
import styles from "./moduleBased.module.css"

class ModuleBased extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Gourav'
        }
    }

    render() {
        return (
            <h2 className={styles.heading}>Module Based CSS</h2>
        )
    }
}

export default ModuleBased