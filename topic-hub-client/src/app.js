import React, {useState} from "react";
import Sidebar from "./components/sidebar";
import Home from './components/home'
import './css/app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginModal from "./modal/loginModal";
import SignUpModal from "./modal/signUpModal";

function App() {
    const [showLogInModal, toggleLogInModal] = useState(false);
    const [showSignUp, toggleSignUpModal] = useState(false);


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
