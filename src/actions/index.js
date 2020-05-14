// actions types
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR'
export const GET_USER_REPO = 'GET_USER_REPO'
export const GET_USER_REPO_SUCCESS = 'GET_USER_REPO_SUCCESS'
export const GET_USER_REPO_ERROR = 'GET_USER_REPO_ERROR'

// action creator

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}

export const getUsersError = (error) => {
    return {
        type: GET_USERS_ERROR,
        error
    }
}

export const getUserInfo = (userLogin) => {
    return {
        type: GET_USER_INFO,
        userLogin
    }
}

export const getUserInfoSuccess = (userInfo) => {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo
    }
}

export const getUserInfoError = (error) => {
    return {
        type: GET_USER_INFO_ERROR,
        error
    }
}

export const getUserRepo = (userLogin) => {
    return {
        type: GET_USER_REPO,
        userLogin
    }
}

export const getUserRepoSuccess = (userRepo) => {
    return {
        type: GET_USER_REPO_SUCCESS,
        userRepo
    }
}

export const getUserRepoError = (error) => {
    return {
        type: GET_USER_REPO_ERROR,
        error
    }
}