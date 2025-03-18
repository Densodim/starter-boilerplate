import {ADD_OBJECT, DELETE_OBJECT, SET_LAYOUT, UPDATE_OBJECT} from "../constants/Planner";

const initialState = {
    objects: [], // Список объектов (столы, стулья)
};

const plannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_OBJECT:
            return { ...state, objects: [...state.objects, action.payload] };

        case UPDATE_OBJECT:
            return {
                ...state,
                objects: state.objects.map((obj) =>
                    obj.id === action.payload.id ? { ...obj, ...action.payload.newCoords } : obj
                ),
            };

        case DELETE_OBJECT:
            return { ...state, objects: state.objects.filter((obj) => obj.id !== action.payload) };

        case SET_LAYOUT:
            return { ...state, objects: action.payload };

        default:
            return state;
    }
};

export default plannerReducer;