import React from 'react'
import './Header.css'
import Burger from 'react-css-burger';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    active: false,
  };

  render () {
    let width = 0;
    if(this.state.active){
      width = 300;
    }

    return (
      <div id="header">
        <Burger
          onClick={() => this.setState({ active: !this.state.active })}
          active={this.state.active}
          color={this.state.active ? 'white' : '#1D5171'}
          burger="stand"
          hoverOpacity={0.9}
        />
      {<div id="sidenav" style={{width}}>
          <Link to="/">Home</Link>
          <Link to="/add-event">Add an Event</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>}
      </div>
    );
  }
}

export default Header;