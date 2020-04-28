import React from 'react';
import AuthApiService from '../../Services/auth-api-service';
import { withRouter } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmit = ev => {
        ev.preventDefault();
        const { user_name, password } = ev.target;
    
        this.setState({ error: null })
          AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
        }).then(res => {
          //do something
        })
        .catch(res => {
            this.setState({ error: res.error });
        })
    }

    render(){
    const { error } = this.state;
    return (
        <div className="register-page">
            <section className="register">
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <input id="user_name" placeholder="Username"/>
                    <input id="password" type="password" placeholder="Password"/>
                    <input id="repeat-password" type="password" placeholder="Repeat Password"/>
                    {error && <p className='red error'>{error}</p>}
                    <button type="submit" className="register-button">Register</button>
                </form>
            </section>
        </div>
    );
    }
}

export default withRouter(Register);