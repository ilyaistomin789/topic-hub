import {ALL_TOPICS, CURRENT_TOPIC, TOPIC_CLEAR} from "../reducers/actionTypes";

export const getTopics = (obj) => (dispatch) => {
    try {
        dispatch({ type: ALL_TOPICS, payload: { topics: obj } });
    }
    catch (e) {
        dispatch({ type: ALL_TOPICS, payload: null });
    }
}
export const clearTopics = () => (dispatch) => {
    dispatch({ type: TOPIC_CLEAR, payload: null });
}
export const getCurrentTopic = (id, name, createBy, createAt, updatedBy) => (dispatch) => {
    try {
        dispatch({ type: CURRENT_TOPIC, payload: { id: id, name: name, createBy: createBy, createAt: createAt, updatedBy: updatedBy }});
    }
    catch (e) {
        dispatch({ type: CURRENT_TOPIC, payload: { id: null, name: null, createBy: null, createAt: null, updatedBy: null }})
    }
}

