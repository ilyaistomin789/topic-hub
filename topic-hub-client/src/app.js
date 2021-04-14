import React, {useEffect, useState} from "react";
import Sidebar from "./components/sidebar";
import Home from './components/home'
import './css/app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginModal from "./modal/loginModal";
import SignUpModal from "./modal/signUpModal";
import useActions from "./helpers/hooks/useActions";

function App() {
    const [showLogInModal, toggleLogInModal] = useState(false);
    const [showSignUp, toggleSignUpModal] = useState(false);
    const redux = useActions();
    const preload = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            console.warn("Check token request")
            fetch('http://localhost:5000/init', {
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
                  <Route path="/login">
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
