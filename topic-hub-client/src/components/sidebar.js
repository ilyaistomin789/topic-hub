import React, {useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import useActions from "../helpers/hooks/useActions";
import socket from "./socket";
import LoginModal from "../modal/loginModal";
import SignUpModal from "../modal/signUpModal";


const Sidebar = (props) => {
    const [showLogInModal, toggleLogInModal] = useState(false);
    const [showSignUpModal, toggleSignUpModal] = useState(false);
    const history = useHistory();
    const redirect = (path) => history.push(path);
    const redux = useActions();
    const {id, username, role, img} = useSelector(state => state.user);
    const logout = async () => {
        await fetch('/logout', {
            method: 'POST'
        }).then(res => res.json())
            .then(value => {
                console.log(value.message);
                localStorage.removeItem('token');
                redux.logoutUser();
                redux.clearTopics();
                socket.emit("USER_DISCONNECTED", username);
                socket.disconnect();
                redirect('/');
            })
    }
    return (

        <div className="wrapper">
            {showLogInModal ? (
                <LoginModal
                    closeCallback={() => toggleLogInModal(false)}
                />
            ) : null}
            {showSignUpModal ? <SignUpModal closeCallback={() => toggleSignUpModal(false)}/> : null}
            <div className="sidebar">
                <h2>Topic Hub</h2>
                <ul>
                    <li>
                        <div className='profile-image'>
                            {img ? <img src={img} alt="Admin" className="rounded-circle profile-image"/> :
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                     className="rounded-circle profile-image"/>}
                        </div>
                        <span>{username ? username : 'Unauthorized user'}</span>
                        {username ? <div className="logout-button">
                            <button type="button" onClick={logout}>Log out</button>
                        </div> : <div className="auth-buttons">
                            <button type="button" onClick={() => {
                                toggleLogInModal(true)
                            }}>Log in
                            </button>
                            <button type="button" onClick={() => {
                                toggleSignUpModal(true)
                            }}>Sign up
                            </button>
                        </div>}
                    </li>
                    {role === 'admin' ?
                        <li><NavLink to="/admin" exact activeClassName="active"><i className="fas fa-user-cog"/>Admin
                            Panel</NavLink></li> : null}
                    <li><NavLink to="/" exact activeClassName="active"><i className="fas fa-home"/>Home</NavLink>
                    </li>
                    <li><NavLink to={`/profile/${id}`} activeClassName="active"><i
    className="fas fa-user"/>Profile</NavLink></li>
                    <li><NavLink to="/topic" activeClassName="active"><i className="fas fa-book"/>Topics</NavLink>
                    </li>
                    <li><NavLink to="/chat" activeClassName="active"><i
    className="fas fa-paper-plane"/>Chat</NavLink></li>
                    <li><NavLink to="/search" activeClassName="active"><i className="fas fa-search"/>Search</NavLink>
                    </li>
                </ul>
                <div className="social_media">
                    <a href="https://github.com/ilyaistomin789" target="_blank" rel="noreferrer"><i
    className="fab fa-github"/></a>
                    <a href="https://www.linkedin.com/in/ilya-istomin-483023206/" target="_blank" rel="noreferrer"><i
    className="fab fa-linkedin"/></a>
                    <a href="https://www.instagram.com/stmnl_/" target="_blank" rel="noreferrer"><i
    className="fab fa-instagram"/></a>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
