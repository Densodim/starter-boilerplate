import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";
import {fetchUsersFailure, fetchUsersSuccess, fetchUserSuccess} from "../actions/Users";
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USERS_REQUEST} from "../constants/User";

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/users`);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    console.error("Fetch Users Error:", error);
    yield put(fetchUsersFailure(error.message || "Error fetching data"));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}

function* fetchUserSaga(action) {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}/users/${action.payload}`);
    yield put(fetchUserSuccess(response.data));  // Сохраняем данные о пользователе в Redux
  } catch (error) {
    console.error("Fetch User Error:", error);
    yield put(fetchUsersFailure(error.message || "Error fetching data"));
  }
}

export function* watchFetchUserById() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);  // Слушаем экшен запроса пользователя
}

export default function* rootSaga() {
  yield all([
      fork(watchFetchUsers),
      fork(watchFetchUserById),
  ]);
}
