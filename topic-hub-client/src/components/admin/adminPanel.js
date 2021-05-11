import React, {useEffect} from "react";
import '../../css/adminPanel.css'
import useActions from "../../helpers/hooks/useActions";
import {useSelector} from "react-redux";
const AdminPanel = (props) => {
    const redux = useActions();

    useEffect(() => {
        (async () => {
            await fetch('/user', {
                method: 'GET'
            })
                .then(data => data.json())
                .then(users => {
                    redux.getAllUsers(users);
                })
        })();
        (async () => {
            await fetch('/topic', {
                method: 'GET'
            })
                .then(data => data.json())
                .then(topics => {
                    redux.getTopics(topics);
                })
        })();
    }, [])
    const {users} = useSelector(state => state.user);
    const { topics } = useSelector(state => state.topic);
    return (
        <div className="main_content">
            <div className="info">
                <h2>Users</h2>
                <ul className="list-group">
                    {users && users.map((user, index) => (
                        <li key={index} className="list-group-item">
                            <div id="list-span">
                                <span id="span_username">{user.username}</span>
                                <span id="span_email">{user.email}</span>
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-primary">Show</button>
                                <button type="button" className="btn btn-outline-primary">Edit</button>
                                <button type="button" className="btn btn-outline-primary">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <h2>Topics</h2>
                <ul className="list-group">
                    {topics && topics.map((topic, index) => (
                        <li key={index} className="list-group-item">
                            <div id="list-span">
                                <span id="span_username">{topic.name}</span>
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-primary">Show</button>
                                <button type="button" className="btn btn-outline-primary">Edit</button>
                                <button type="button" className="btn btn-outline-primary">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default AdminPanel;
