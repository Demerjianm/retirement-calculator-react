import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import pika from '../images/pika.png'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about'},
]

const authenticatedLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Logout' }
]

const unAuthenticatedLinks = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]

class NavBar extends React.Component {



  render() {
    let { id } = this.props;
    let navs;

    if (id) {
      navs = [...links, ...authenticatedLinks];
    } else {
      navs = [...links, ...unAuthenticatedLinks];
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
    <img src={pika} height='30' width='30' />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/UserForm">Form</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">Login</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
 }
}

const mapStateToProps = (state) => {
  return { id: state.user._id }
}

export default withRouter(connect(mapStateToProps)(NavBar));