import React from 'react';
import { authenticate } from '../actions/user';
import { connect } from 'react-redux';

class Auth extends React.Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, history, dispatch } = this.props;
    let { email, password } = this.state;
    dispatch(authenticate(email, password, title, history))
  }

  render() {
    let { title } = this.props;
    let { email, password } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            label="email"
            required
            type="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            id="password"
            label="password"
            required
            type="password"
            onChange={this.handleChange}
            value={password}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Auth);