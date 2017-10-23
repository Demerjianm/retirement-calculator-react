import React from 'react';
import { connect } from 'react-redux';
import Calc from './Calc'
import { withRouter } from 'react-router-dom';

class FinCalculator extends React.Component {

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }


    render(){
        console.log(this.state)
        return(
            <div>
            <div>
                <h3>Financial Calculator's</h3>
            </div>
            <div>
                <Calc 
                  handleChange={this.handleChange}/>
            </div>
            </div>

        )
    }
}


export default connect()(FinCalculator)