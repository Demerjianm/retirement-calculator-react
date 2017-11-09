import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import request from 'request'
import https from 'https'


class About extends React.Component {


    
    render() {
        return(
            <div className="container">
            <div className="row justify-content-md-center">
              <div>
                  <button onClick={() => this.get_token()}> Get it </button>
                <p>this will be the one stop shop for everything retirement, with bitchin feautures and knick nacks. </p>
              </div>
            </div>
            </div>
        )
    }   
}

export default withRouter(connect()(About))