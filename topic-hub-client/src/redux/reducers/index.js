import {combineReducers} from "redux";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";
import messageReducer from "./messageReducer";
import chatDataReducer from "./chatDataReducer";
import topicReducer from "./topicReducer";
const rootReducer = combineReducers({
    user: userReducer,
    socket: socketReducer,
    message: messageReducer,
    chatData: chatDataReducer,
    topic: topicReducer
})
export default rootReducer;
