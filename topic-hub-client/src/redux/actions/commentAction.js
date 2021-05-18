import {ALL_COMMENTS, COMMENT_CLEAR} from '../reducers/actionTypes';

export const getComments = (obj) => (dispatch) => {
    try {
        dispatch({type: ALL_COMMENTS, payload: {comments: obj}});
    } catch (e) {
        dispatch({type: ALL_COMMENTS, payload: {comments: null}});
    }
}

export const clearComments = () => (dispatch) => {
    dispatch({type: COMMENT_CLEAR, payload: null})
}
