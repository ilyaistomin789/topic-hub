import {ALL_COMMENTS, COMMENT_CLEAR} from '../reducers/actionTypes';

const initialState = {
    text: '',
    img: '',
    post: '',
    createBy: {},
    comments: []
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_COMMENTS: {
            return {...state, ...action.payload};
        }
        case COMMENT_CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default commentReducer;
