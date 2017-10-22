import React from 'react';
import { connect } from 'react-redux';

const Home = ({ username }) => (
  <div>
    <h3>
      { username ? `Welcome ${username}` : 'Welcome please sign in' }
    </h3> 
  </div>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Home);