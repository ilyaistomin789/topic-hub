import React, {useEffect, useState} from "react";
import Sidebar from "./components/sidebar";
import Home from './components/home'
import './css/app.css'
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import LoginModal from "./modal/loginModal";
import SignUpModal from "./modal/signUpModal";
import useActions from "./helpers/hooks/useActions";
import Chat from "./components/chat";
import socket from "./components/socket"
import {useSelector} from "react-redux";


function App() {
    const history = useHistory();
    const {username} = useSelector(state => state.user);
    const redirect = (path) => history.push(path);
    const [showLogInModal, toggleLogInModal] = useState(false);
    const [showSignUp, toggleSignUpModal] = useState(false);
    const redux = useActions();
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
                })
                .catch((e) => {
                    localStorage.removeItem('token');
                    toggleLogInModal(true);
                })
        } else console.warn("Check request is passed")
    }

    useEffect(() => {
        preload();
    }, [])

    socket.on("connect_error", (err) => {
        console.log("connect error")
        if (err.message === "invalid username") {
            socket.usernameAlreadySelected = false;
        }
    });

    socket.on("user connected", (user) => {
        console.log("user connected");
        //TODO add user
    });

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
                      {!!username ? <Chat/> : null}
                      {/*TODO fix null*/}
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>

  );
}



export default App;
