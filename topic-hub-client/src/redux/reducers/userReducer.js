import {ALL_USERS, AUTHORIZATION, GET_USER_DATA, USER_CLEAR} from "./actionTypes";

const initialState = {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    role: null,
    img: null,
    token: null,
    success: false,
    github: null,
    twitter: null,
    instagram: null,
    facebook: null,
    users: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION: {
            return {...state, ...action.payload};
        }
        case ALL_USERS: {
            return {...state, ...action.payload};
        }
        case USER_CLEAR: {
            return initialState;
        }
        case GET_USER_DATA: {
            return {...state, ...action.payload};
        }
        default: {
            return state;
        }
    }
}
export default userReducer;
