import { combineReducers } from "redux"
import {
  findAllCustomerReducer,
  saveCustomerReducer,
  findCustomerByIdReducer,
  updateCustomerReducer
} from "./customerReducer"

import {
  finAllTransactionReducer,
  findTransactionByIdReducer,
  saveTransactionReducer,
  updateTransactionReducer
} from "./transactionReducer";

import {
  loginReducer
} from "./loginReducer";

import {findAllAccountReducer} from "./signupReducer";

const rootReducer = combineReducers({
  //CUSTOMER
  findAllCustomerReducer,
  saveCustomerReducer,
  findCustomerByIdReducer,
  updateCustomerReducer,

  //TRANSACTION
  finAllTransactionReducer,
  saveTransactionReducer,
  findTransactionByIdReducer,
  updateTransactionReducer,

  //LOGIN
  loginReducer,

  //SIGNUP
  findAllAccountReducer,
})

export default rootReducer