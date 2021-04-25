import React, {useEffect, useState} from 'react'
import Modal from "../elements/modal";
import '../css/login.css';
import useActions from "../helpers/hooks/useActions";
import {useHistory} from "react-router-dom";
import socket from "../components/socket";
const LoginModal = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const redux = useActions();
    const history = useHistory();
    const redirect = (path) => { history.push(path); }
    const checkFields = async (event) => {
        event.preventDefault();
        // this.state.login.length < 5 && alert('Login length must be more than 5 characters');
        // this.state.password.length < 5 && alert('Password length must be more than 5 characters');
        await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        }).then(res => res.json())
            .then(user => {
                redux.authUser(user['user'].id, user['user'].username, user['user'].role, user['user'].img, user.token, user.success);
                props.toggleModal(false);
                socket.emit('JOIN', {username: user['user'].username});
                redirect('/profile');
                localStorage.setItem('token', user.token);
            })
    }
    useEffect(() => {
        socket.on("SOCKET_DATA", data => {
            redux.setChatData(data);
        })
    }, [])
        return(
            <Modal toggleModal={props.toggleModal}>
                <form onSubmit={checkFields}>
                    <div className="login-div">
                        <p className="login-paragraph" align="center">Login</p>
                        <input className="login-input" name="login" type="text" placeholder="Login" value={login} onChange={(event) => setLogin(event.target.value)}/>
                        <input className="password-input" name="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <input className="submit" type="submit" value="Login"/>
                    </div>
                </form>
            </Modal>
        )
}
export default LoginModal
