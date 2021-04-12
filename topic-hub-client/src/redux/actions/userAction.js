import {AUTHORIZATION} from "../reducers/actionTypes";

export const authUser = (id, username, role, img, token, success) => (dispatch) => {
    try {
        dispatch({ type: AUTHORIZATION, payload: {id, username, role, img, token, success} });
    }
    catch (e) {
        dispatch({ type: AUTHORIZATION, payload: {id: null, username: null, role: null, img: {}, token: null, success: false} });
    }
}
export const logoutUser = () => (dispatch) => {
    dispatch({type: AUTHORIZATION, payload: {id: null, username: null, role: null, img: {}, token: null, success: false}});
}
