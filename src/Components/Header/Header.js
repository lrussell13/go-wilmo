import React from 'react'
import './Header.css'
import Burger from 'react-css-burger';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    active: false,
  };

  render () {
    return (
      <div id="header">
        <Burger
          onClick={() => this.setState({ active: !this.state.active })}
          active={this.state.active}
          burger="stand"
          hoverOpacity={0.8}
        />
      {this.state.active && 
        <div id="sidenav">
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