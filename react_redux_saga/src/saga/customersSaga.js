import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  addCustomerAction,
  addManyCustomerAction,
  ASYNC_ADD_CUSTOMER,
  ASYNC_ADD_MANY_CUSTOMER,
  ASYNC_DELETE_CUSTOMER,
  deleteCustomerAction,
} from "../store/customerReducer";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

function* addManyCustomersWorker(action) {
  const customers = yield call(() =>
    axios.get("https://jsonplaceholder.typicode.com/users")
  );
  yield put(addManyCustomerAction(customers.data));
}

function* addCustomerWorker(action) {
  yield delay(1000);
  yield console.log(action);
  yield put(addCustomerAction(action.payload));
}

function* deleteCustomerWorker(action) {
  yield delay(1000);
  yield console.log(action);
  yield put(deleteCustomerAction(action.payload));
}

export function* customersWatcher() {
  yield takeEvery(ASYNC_ADD_MANY_CUSTOMER, addManyCustomersWorker);
  yield takeEvery(ASYNC_ADD_CUSTOMER, addCustomerWorker);
  yield takeEvery(ASYNC_DELETE_CUSTOMER, deleteCustomerWorker);
}
