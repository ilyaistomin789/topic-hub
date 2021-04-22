import socket from "./socket";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../css/chat.css';
import useActions from "../helpers/hooks/useActions";
const Chat = (props) => {
    const redux = useActions();
    const usernameSelection = (username) => {
        socket.usernameAlreadySelected = true;
        socket.auth = { username };
        socket.connect();
        socket.on("users", (users) => {
            console.log("users");
            console.log(users)
            users.forEach((user) => {
                user.self = user.userID === socket.id;
            });
            // put the current user first, and then sort by username
            users = users.sort((a, b) => {
                if (a.self) return -1;
                if (b.self) return 1;
                if (a.username < b.username) return -1;
                return a.username > b.username ? 1 : 0;
            });
            redux.setSocket(users);

            //props.toggleChatUserList(users);
        });
    }
    const {username} = useSelector(state => state.user);
    useEffect(() => {
        usernameSelection(username);
    }, []);
    return(
        <div className="main_content">
            <div className="info">
                <div id="container">
                    <aside>
                        <ul>
                            {/*{props.chatUserList.map((el, index) => (*/}
                            {/*    <li key={index}>*/}
                            {/*        <div>*/}
                            {/*            <h2>{el.username}</h2>*/}
                            {/*            <h3>*/}
                            {/*                <span className="status green"/>*/}
                            {/*                online*/}
                            {/*            </h3>*/}
                            {/*        </div>*/}
                            {/*    </li>*/}
                            {/*))}*/}
                        </ul>
                    </aside>
                    <main>
                        <ul id="chat">
                            <li className="me">
                                <div className="message">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </div>
                            </li>
                        </ul>
                        <footer>
                            <textarea placeholder="Type your message"></textarea>
                            <a href="#">Send</a>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Chat;
