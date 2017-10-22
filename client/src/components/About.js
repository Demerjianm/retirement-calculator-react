import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class About extends React.Component {
    
    render() {
        return(
            <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-1">
                <p>this will be the one stop shop for everything retirement, with bitchin feautures and knick nacks. </p>
              </div>
            </div>
            </div>
        )
    }   
}

export default withRouter(connect()(About))