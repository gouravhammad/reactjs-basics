import { connect } from "react-redux"
import { buyIceCream } from '../redux/index'

const IceCream = ({ totalIceCream, buyIceCream }) => {
    return (
        <div>
            <h2>IceCream Component {totalIceCream}</h2>
            <button onClick={buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalIceCream: state.iceCream.totalIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream)