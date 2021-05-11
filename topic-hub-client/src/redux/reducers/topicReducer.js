import {ALL_TOPICS, CURRENT_TOPIC, TOPIC_CLEAR} from "./actionTypes";

const initialState = [{
    id: '',
    name: '',
    createBy: '',
    createAt: '',
    updatedBy: '',
    topics: []
}]
const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_TOPICS: {
            return { ...state, ...action.payload };
        }
        case CURRENT_TOPIC: {
            return { ...state, ...action.payload };
        }
        case TOPIC_CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
export default topicReducer;
