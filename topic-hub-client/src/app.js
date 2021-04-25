import React, {useEffect, useState} from "react";
import Sidebar from "./components/sidebar";
import Home from './components/home'
import './css/app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginModal from "./modal/loginModal";
import SignUpModal from "./modal/signUpModal";
import useActions from "./helpers/hooks/useActions";
import Chat from "./components/chat";
import socket from "./components/socket"
import {useSelector} from "react-redux";


function App() {
    const {username} = useSelector(state => state.user);
    const [showLogInModal, toggleLogInModal] = useState(false);
    const [showSignUp, toggleSignUpModal] = useState(false);
    const redux = useActions();
    const setMessage = (obj) => redux.setMessage(obj);
    const setUsers = (users) => redux.setSocket(users);


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

  return (
      <BrowserRouter>
          {!!showLogInModal ? <LoginModal toggleModal={toggleLogInModal}/> : null}
          {!!showSignUp ? <SignUpModal toggleModal={toggleSignUpModal}/> : null}
          <div className="App">
              <Sidebar toggleLogInModal={toggleLogInModal} toggleSignUpModal={toggleSignUpModal}/>
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
                  <Route path="/profile" exact>

                  </Route>
                  <Route path="/chat" exact>
                      {!!username ? <Chat onSetMessage={setMessage}/> : null}
                      {/*TODO fix null*/}
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>

  );
}



export default App;
