import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from "../constants/User";

const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
        case FETCH_USER_REQUEST:
            return {...state, loading: true, error: null};

        case FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload};

        case FETCH_USERS_FAILURE:
        case FETCH_USER_FAILURE:
            return {...state, loading: false, error: action.payload};

        case FETCH_USER_SUCCESS:
            return {...state, loading: false, user: action.payload};
        default:
            return state;
    }
};

export default usersReducer;
