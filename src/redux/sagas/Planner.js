import { put, takeLatest, select } from "redux-saga/effects";
import {setLayout} from "../actions/Planner";
import {LOAD_LAYOUT, SAVE_LAYOUT} from "../constants/Planner";

// Функция для получения текущего состояния layout
const getPlannerState = (state) => state.planner.objects;

function* saveLayoutSaga() {
    const state = yield select(getPlannerState); // Получаем текущее состояние
    localStorage.setItem("plannerState", JSON.stringify(state)); // Сохраняем
}

function* loadLayoutSaga() {
    const savedState = JSON.parse(localStorage.getItem("plannerState"));
    if (savedState) {
        yield put(setLayout(savedState));
    }
}

export function* watchPlanner() {
    yield takeLatest(SAVE_LAYOUT, saveLayoutSaga);
    yield takeLatest(LOAD_LAYOUT, loadLayoutSaga);
}