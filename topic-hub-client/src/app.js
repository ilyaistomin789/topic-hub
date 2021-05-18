import React, {useEffect, useState} from "react";
import Sidebar from "./components/sidebar";
import Home from './components/home'
import './css/app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import useActions from "./helpers/hooks/useActions";
import Chat from "./components/chat";
import socket from "./components/socket"
import {useSelector} from "react-redux";
import Topic from "./components/topic";
import AdminPanel from "./components/admin/adminPanel";
import CurrentTopic from "./components/currentTopic";
import Profile from "./components/profile";
import LoginModal from "./modal/loginModal";
import CurrentPost from "./components/currentPost";

function App() {
    const {id, username} = useSelector(state => state.user);
    const redux = useActions();
    const setMessage = (obj) => redux.setMessage(obj);
    const setUsers = (users) => redux.setSocket(users);
    const [showLogInModal, toggleLogInModal] = useState(false);
    const preload = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            console.warn("Check token request")
            fetch('/init', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(r => r.json())
                .then(user => {
                    redux.authUser(user.id, user.username, user.role, user.img, token, true);
                    socket.emit('JOIN', {username: user.username});
                })
                .catch((e) => {
                    localStorage.removeItem('token');
                    socket.disconnect();
                    toggleLogInModal(true);
                })
        } else console.warn("Check request is passed")
    }

    useEffect(() => {
        preload();
        socket.on("SET_USERS", setUsers);
        socket.on("NEW_MESSAGE", setMessage);
    }, [])


    const closeModal = () => {
        console.log('close')
        toggleLogInModal(false);
        console.log(showLogInModal);
    }

    return (
        <BrowserRouter>
            <div className="App">
                {showLogInModal ? (<LoginModal closeCallback={closeModal}/>) : null}
                <Sidebar/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/admin" exact>
                        <AdminPanel/>
                    </Route>
                    <Route path="/profile/:id">
                        {!!id ? <Profile/> : () => {
                            toggleLogInModal(true)
                        }}
                    </Route>
                    <Route path="/topic" exact>
                        {!!username ? <Topic/> : () => {
                            toggleLogInModal(true)
                        }}
                    </Route>
                    <Route path="/chat" exact>
                        {!!username ? <Chat onSetMessage={setMessage}/> : () => {
                            toggleLogInModal(true)
                        }}
                        {/*TODO fix null*/}
                    </Route>
                    <Route path='/topic/:topicName' exact>
                        {!!username ? <CurrentTopic/> : () => {
                            toggleLogInModal(true)
                        }}
                    </Route>
                    <Route path='/topic/:topicName/:postId' exact>
                        {!!username ? <CurrentPost/> : () => {
                            toggleLogInModal(true)
                        }}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}


export default App;
