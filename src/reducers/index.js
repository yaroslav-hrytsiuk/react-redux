import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_ERROR,
    GET_USER_REPO,
    GET_USER_REPO_SUCCESS,
    GET_USER_REPO_ERROR
} from '../actions'

const initialState = {
    users: null,
    userInfo: null,
    userRepo: null,
    isError: null,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                isLoading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                isError: action.error,
                isLoading: false
            }
        case GET_USER_INFO:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.userInfo,
                isLoading: false
            }
        case GET_USER_INFO_ERROR:
            return {
                ...state,
                isError: action.error,
                isLoading: false
            }
        case GET_USER_REPO:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_REPO_SUCCESS:
            return {
                ...state,
                userRepo: action.userRepo,
                isLoading: false
            }
        case GET_USER_REPO_ERROR:
            return {
                ...state,
                isError: action.error,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer