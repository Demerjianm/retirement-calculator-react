import React from 'react';
import { connect } from 'react-redux';
import FvCalc from './FvCalc'
import PvCalc from './PvCalc'
import PvPmtCalc from './PvPmtCalc'
import FvPmtCalc from './FvPmtCalc'
import { withRouter } from 'react-router-dom';

class FinCalculator extends React.Component {

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }


    render(){
        console.log(this.state)
        return(
            <div className='container'>
                <div className='row' >
                        <h3 align-self='center'>Financial Calculator's</h3>
                 </div>
                 <div className='row'>
                    <div className='col'>
                        <FvCalc />
                    </div>
                    <div className='col'>
                        <PvCalc />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <PvPmtCalc />
                    </div>
                    <div className='col'>
                        <FvPmtCalc />
                    </div>
                </div>    
            </div>
                

        )
    }
}


export default connect()(FinCalculator)