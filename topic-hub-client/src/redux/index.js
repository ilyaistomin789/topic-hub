import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
(() => {
    const token = localStorage.getItem('token');
    if (token) {
        fetch('http://localhost:5000/init', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(r => r.json())
            .then(user => {
                console.log(user);
            })
    }
})()
export default store;

