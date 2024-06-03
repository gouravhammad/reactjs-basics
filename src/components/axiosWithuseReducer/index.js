import axios from 'axios'
import { Fragment, useEffect, useReducer } from 'react'

const initialState = {
    data: null,
    isLoading: false,
    isError: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_USER_DATA_INIT': 
            return {
                ...state,
                data: null,
                isLoading: true,
                isError: false
            }
        case 'FETCH_USER_DATA_SUCCESS': 
            return {
                ...state,
                data: action.data,
                isLoading: false,
                isError: false
            }
        case 'FETCH_USER_DATA_FAIL': 
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true
            }
        default: return {
            ...initialState
        }
    }
}

const AxiosWithUseReducerDemo = () => {

    const [userData, dispatch] = useReducer(reducer, initialState)
    const { isError = false, isLoading = false, data = null } = userData || {}

    const fetchUserData = () => {
        dispatch({ type: 'FETCH_USER_DATA_INIT' })
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            dispatch({ type: 'FETCH_USER_DATA_SUCCESS', data: response.data })    
        })
        .catch(error => {
            dispatch({ type: 'FETCH_USER_DATA_FAIL' } )
        })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <Fragment>
            {isLoading ? 
                <p>Loading......</p> :
                <div>
                    <h2>Axios With useReducer Demo</h2>
                    {isError ?
                        <p>Error Occured, pls try after some time</p>:
                        <p>{data?.title}</p>
                    }
                </div>
            }        
        </Fragment>
    )
}

export default AxiosWithUseReducerDemo