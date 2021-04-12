import {AUTHORIZATION} from "./actionTypes";

const initialState = {
    id: null,
    username: null,
    role: null,
    img: {},
    token: null,
    success: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION: {
         return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
}
export default userReducer;
