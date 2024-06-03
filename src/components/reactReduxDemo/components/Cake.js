import { connect } from "react-redux"
import { buyCake } from '../redux/index'

const Cake = ({ totalCake, buyCake }) => {
    return (
        <div>
            <h2>Cake Component {totalCake}</h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalCake: state.cake.totalCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)