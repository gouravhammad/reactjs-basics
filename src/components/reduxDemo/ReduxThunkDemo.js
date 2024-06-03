import axios from "axios"
import { applyMiddleware, createStore } from "redux"
import { useEffect } from "react"
import { thunk } from "redux-thunk"

const FETCH_TODO_LIST_INIT = 'FETCH_TODO_LIST_INIT'
const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS'
const FETCH_TODO_LIST_FAIL = 'FETCH_TODO_LIST_FAIL'

const initialState = {
    isLoading: false,
    todoList: [],
    error: ''
}

const fetchTodoListInit = () => {
    return {
        type: FETCH_TODO_LIST_INIT
    }
}

const fetchTodoListSuccess = (list) => {
    return {
        type: FETCH_TODO_LIST_SUCCESS,
        payload: list
    }
}

const fetchTodoListFail = (error) => {
    return {
        type: FETCH_TODO_LIST_FAIL,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODO_LIST_INIT: return {
            ...state,
            isLoading: true,
        }
        case FETCH_TODO_LIST_SUCCESS: return {
            ...state,
            isLoading: false,
            todoList: action.payload,
            error: ''
        }
        case FETCH_TODO_LIST_FAIL: return {
            ...state,
            isLoading: false,
            todoList: [],
            error: action.payload
        }
        default: return state
    }
}

const fetchTodoList = () => {
    return (dispatch) => {
        dispatch(fetchTodoListInit())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            dispatch(fetchTodoListSuccess(response.data))
        }).catch(error => {
            dispatch(fetchTodoListFail(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

const { getState, dispatch, subscribe } = store || {}

const unsubscribe = subscribe(() => {
    console.log('State Updated: ', getState())
})



const ReduxThunkDemo = () => {

    //const { isLoading = false, todoList = [], error = '' } = getState() || {}

    useEffect(() => {
        dispatch(fetchTodoList())
    }, [])

    return (
        <div>
            <h2>Redux Thunk Demo</h2>
            {/* { isLoading ? 
                <div>Loading.....</div>:
                <div>
                    {error ? 
                        <p>{error}</p>:
                        <div>
                            {(todoList || []).map((item, index) => {
                                return (
                                    <p key={`todo_list_${index}`}>{item.title}</p>
                                )
                            })}
                        </div>
                    }
                </div>
            } */}
        </div>
    )
}

export default ReduxThunkDemo