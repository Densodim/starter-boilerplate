import {
    ADD_OBJECT,
    DELETE_OBJECT,
    IMPORT_LAYOUT,
    LOAD_LAYOUT,
    SAVE_LAYOUT,
    SET_LAYOUT,
    UPDATE_OBJECT
} from "../constants/Planner";

export const addObject = (object) => ({
    type: ADD_OBJECT,
    payload: object,
});

export const updateObject = (id, newCoords) => ({
    type: UPDATE_OBJECT,
    payload: {id, newCoords},
});

export const deleteObject = (id) => ({
    type: DELETE_OBJECT,
    payload: id,
});

export const saveLayout = () => ({
    type: SAVE_LAYOUT,
});

export const loadLayout = (data) => ({
    type: LOAD_LAYOUT,
    payload: data,
});

export const setLayout = (layout) => ({
    type: SET_LAYOUT,
    payload: layout,
});
export const importLayout = (data) => ({
    type: IMPORT_LAYOUT,
    payload: data,
});