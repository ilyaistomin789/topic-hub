import React from "react";
import Modal from "../elements/modal";
import '../css/signUp.css'
class SignUpModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: ''
        }
        this.checkFields = this.checkFields.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
    }
    checkFields = async (event) => {
        event.preventDefault();
        //TODO add logic
        await fetch('/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.login,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        });
    }
    handleLoginChange = (event) => {
        this.setState({ login: event.target.value })
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    handleConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value })
    }
    render() {
        return (
            <Modal toggleModal={this.props.toggleModal}>
                <form onSubmit={this.checkFields}>
                    <div className="signUp-div">
                        <p className="signUp-paragraph">Sign Up</p>
                        <input className="login-input" name="name" type="text" placeholder="Login" value={this.state.login} onChange={this.handleLoginChange}/>
                        <input className="firstName-input" name="firstName" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                        <input className="lastName-input" name="lastName" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                        <input className="email-input" name="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange}/>
                        <input className="password-input" name="password" type="password" placeholder="Password" align="center" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <input className="confirmPassword-input" type="password" placeholder="Confirm Password" align="center" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
                        <input className="submit" type="submit" value="Sign Up"/>
                    </div>
                </form>
            </Modal>
        );
    }
}
export default SignUpModal
