import { all } from "redux-saga/effects";
import {
  watchFindAllCustomer,
  watchSaveCustomer,
  watchFindCustomerById,
  watchUpdateCustomer
} from "./customerSaga";
import {
  watchFindAllTransaction,
  watchFindTransactionById,
  watchSaveTransaction,
  watchUpdateTransactionById
} from "./transactionSaga";
import {watchLoginSaga} from "./loginSaga";
import {
  watchFindAllAccount,
  watchFindByIdAccount,
  watchRemoveById,
  watchSaveAccount,
  watchUpdateAccountById
} from "./signupSaga";



export default function* rootSaga() {
  yield all([
    watchFindAllCustomer(),
    watchSaveCustomer(),
    watchUpdateCustomer(),
    watchFindCustomerById(),

    watchFindAllTransaction(),
    watchSaveTransaction(),
    watchFindTransactionById(),
    watchUpdateTransactionById(),

    watchLoginSaga(),

    watchFindAllAccount(),
    watchSaveAccount(),

    watchFindByIdAccount(),
    watchUpdateAccountById(),
    watchRemoveById(),
  ])
}