import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ _id, username, role }) => (
  <div>
    <h2>{username}</h2>
    <h2>{_id}</h2>
    <h2>{role}</h2>
  </div>
)

const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(mapStateToProps)(Dashboard);