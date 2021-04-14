import React from 'react'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import useActions from "../helpers/hooks/useActions";


const Sidebar = (props) => {
    const redux = useActions();
    const {username} = useSelector(state => state.user);
    const logout = async () => {
        await fetch('http://localhost:5000/logout', {
            method: 'POST'
        }).then(res => res.json())
            .then(value => {
                console.log(value.message);
                localStorage.removeItem('token');
                redux.logoutUser();
            })
    }
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Topic Hub</h2>
                    <ul>
                        <li><div className='profile-image'>
                            <i className="fas fa-user-ninja"/>
                        </div>
                            <span>{username ? username : 'Unauthorized user'}</span>
                            {username ? <div className="logout-button">
                                <button type="button" onClick={logout}>Log out</button>
                            </div> : <div className="auth-buttons">
                                <button type="button" onClick={() => props.toggleLogInModal(true)}>Log in</button>
                                <button type="button" onClick={() => props.toggleSignUpModal(true)}>Sign up</button>
                            </div>}
                        </li>
                        <li><NavLink to="/" exact activeClassName="active"><i className="fas fa-home"></i>Home</NavLink></li>
                        <li><NavLink to="/profile" activeClassName="active"><i className="fas fa-user"></i>Profile</NavLink></li>
                        <li><NavLink to="/topic" activeClassName="active"><i className="fas fa-book"></i>Topics</NavLink></li>
                        <li><NavLink to="/chat" activeClassName="active"><i className="fas fa-paper-plane"></i>Chat</NavLink></li>
                        <li><NavLink to="/search" activeClassName="active"><i className="fas fa-search"></i>Search</NavLink></li>
                    </ul>
                    <div className="social_media">
                        <a href="https://github.com/ilyaistomin789" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ilya-istomin-483023206/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/stmnl_/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        );
}
export default Sidebar;
