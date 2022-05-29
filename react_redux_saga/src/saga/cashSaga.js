import { put, takeEvery } from "redux-saga/effects";
import {
  addCashAction,
  getCashAction,
  ASYNC_ADD_CASH,
  ASYNC_GET_CASH,
} from "../store/cashReducer";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

function* addCashWorker(action) {
  yield delay(1000);
  yield console.log(action);
  yield put(addCashAction(action.payload));
}

function* getCashWorker(action) {
  yield delay(1000);
  yield console.log(action);
  yield put(getCashAction(action.payload));
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, (action) => addCashWorker(action)); // можно так, чтобы было понятнее
  yield takeEvery(ASYNC_GET_CASH, getCashWorker); // можно так, чтобы было понятнее, но так куда лучше
}
