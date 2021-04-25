import {combineReducers} from "redux";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";
import messageReducer from "./messageReducer";
import chatDataReducer from "./chatDataReducer";
const rootReducer = combineReducers({
    user: userReducer,
    socket: socketReducer,
    message: messageReducer,
    chatData: chatDataReducer
})
export default rootReducer;
