import { takeLatest, put, call } from 'redux-saga/effects'
import api from '../Api'
import { getUsersSuccess, getUsersError, getUserInfoSuccess, getUserInfoError, getUserRepoSuccess, getUserRepoError } from '../actions'

function* getUsers() {
    try {
        const users = yield api.getAllUsers()
        yield put(getUsersSuccess(users))
    } catch (err) {
        yield put(getUsersError(err.message))
    }
}

function* getUserInfo(action) {
    try {
        const userInfo = yield call(api.getUserInfo, action.userLogin)
        yield put(getUserInfoSuccess(userInfo))
    } catch (err) {
        yield put(getUserInfoError(err.message))
    }
}

function* getUserRepo(action) {
    try {
        const userInfo = yield call(api.getUserRepo, action.userLogin)
        yield put(getUserRepoSuccess(userInfo))
    } catch (err) {
        yield put(getUserRepoError(err.message))
    }
}


function* saga() {
    yield takeLatest('GET_USERS', getUsers)
    yield takeLatest('GET_USER_INFO', getUserInfo)
    yield takeLatest('GET_USER_REPO', getUserRepo)
}

export default saga