import axios from "../api";
import {
    FIND_ALL_TRANSACTION,
    FIND_ALL_TRANSACTION_FAILURE,
    FIND_ALL_TRANSACTION_SUCCESS, FIND_TRANSACTION_BY_ID,
    FIND_TRANSACTION_BY_ID_FAILURE,
    FIND_TRANSACTION_BY_ID_SUCCESS,
    SAVE_TRANSACTION,
    SAVE_TRANSACTION_FAILURE,
    SAVE_TRANSACTION_SUCCESS, UPDATE_TRANSACTION_SUCCESS
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects";

function* findAllTransactionSaga(data) {

    let result = yield axios.get("/transaction")
        .then (data => {
            return ({
                type : FIND_ALL_TRANSACTION_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_TRANSACTION_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveTransactionSaga(action) {
    let model = action.model
    let method = 'POST', url = '/transaction';
    if (model.id) {
        method = "PUT";
        url += `/${model.id}`
    }

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_TRANSACTION_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_TRANSACTION_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* findTransactionByIdSaga(action) {
    let result = yield axios.get(`/transaction ${action.id}`)
        .then(data => {
            return ({
                type: FIND_TRANSACTION_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_TRANSACTION_BY_ID_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* updateTransactionSaga(action) {
    let result = yield axios.get(`/${action.id}/transaction}`)
        .then(data => {
            return({
                type: UPDATE_TRANSACTION_SUCCESS,
                data: result
            })
        })
        .catch(err => {
            return ({
                type: FIND_TRANSACTION_BY_ID_FAILURE,
                error: err
            })
        })
    yield put({
    })
}

export function* watchFindAllTransaction() {
    yield takeLatest(FIND_ALL_TRANSACTION, findAllTransactionSaga)
}

export function* watchSaveTransaction() {
    yield takeLatest(SAVE_TRANSACTION, saveTransactionSaga)
}

export function* watchFindTransactionById() {
    yield takeLatest (FIND_TRANSACTION_BY_ID, findTransactionByIdSaga)
}

export function* watchUpdateTransactionById() {
    yield takeLatest (UPDATE_TRANSACTION_SUCCESS, updateTransactionSaga)
}