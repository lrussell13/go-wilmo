import React from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
//import config from '../../config';
import { withRouter, Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
          AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.history.push(`/user`);
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    } 

    render(){
    const { error } = this.state;
    return (
        <>
          <section className="login">
              <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                  <div role='alert'>
                  {error && <p className='red'>{error}</p>}
                  </div>
                  <input id="user_name" placeholder="Username"/>
                  <input id="password" type="password" placeholder="Password"/>
                  <button type="submit" className="login-button">Login</button>
                  <Link to="/register"><div className="register-button">Register</div></Link>
              </form>
          </section>
        </>
    );
    }
}

export default withRouter(Login);