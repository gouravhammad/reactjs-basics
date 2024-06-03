import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux"

const HookCake = () => {

    const dispatch = useDispatch()
    const totalCake = useSelector((state) => state.cake.totalCake)

    return (
        <div>
            <h2>Hook Cake Component {totalCake}</h2>
            <button onClick={() => dispatch(buyCake(1))}>Buy Cake</button>
        </div>
    )
}

export default HookCake