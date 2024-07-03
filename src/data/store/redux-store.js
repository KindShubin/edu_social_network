import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/reducerProfile";
import reducerDialogs from "./reducers/reducerDialogs";
import reducerSidebar from "./reducers/reducerSidebar";


let reducers = combineReducers({
    profile: reducerProfile,
    dialogs: reducerDialogs,
    sidebar: reducerSidebar
});

let store = createStore(reducers);

export default store;