import axios from "axios";
import {FIND_ALL_ACCOUNT, FIND_ALL_ACCOUNT_FAILURE, FIND_ALL_ACCOUNT_SUCCESS} from "../constants/actions";
import { put, takeLatest } from "redux-saga/effects"

function* findAllAccountSaga() {
    let result = yield axios.get("/users")
        .then(data => {
            return ({
                type: FIND_ALL_ACCOUNT_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_ACCOUNT_FAILURE,
                error: err
            })
        })
    yield put (result)
}

export function* watchFindAllAccount() {
    yield takeLatest(FIND_ALL_ACCOUNT, findAllAccountSaga)
}