import {combineReducers} from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import usersReducer from "./Users";
import plannerReducer from "./Planner";

const reducers = combineReducers({
    planner: plannerReducer,
    users: usersReducer,
    theme: Theme,
    auth: Auth,
});

export default reducers;
