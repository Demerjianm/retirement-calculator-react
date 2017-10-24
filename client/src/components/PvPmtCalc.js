import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class PvPmtCalc extends React.Component {

    state = { value: 1}


    inputs = () => {

        let {futureValue, years, presentValue, interest, payment} = this.state
        let pv


        return(
        <div>

        <div className="row">
        <div className="col" id='fvCalc'>
        <div className="input-group">
            <span className="input-group-addon">Yrs</span>
            <input type="text" 
                className="form-control" 
                id="years" 
                placeholder="Years" 
                onChange={this.handleChange}
                value={this.state.years}
                />
        </div>
             <br />
        <div className="input-group">
            <label className="input-group-addon">Int</label>
            <input type="text" 
                className="form-control" 
                id="interest" 
                placeholder="Interest Rate" 
                onChange={this.handleChange}
                value={this.state.interest}
                />
        </div>
            <br />
        <div className="input-group">
                <label className="input-group-addon">PMT</label>
                <input type="text" 
                className="form-control" 
                id="payment" 
                placeholder="Payment" 
                onChange={this.handleChange}
                value={this.state.payment}
                />
        </div>
            <br />
        <div className="input-group">
                <label className="input-group-addon">FV</label>
                <input type="text" 
                className="form-control" 
                id="futureValue" 
                placeholder="Future Value" 
                onChange={this.handleChange}
                value={this.state.futureValue}
                />
        </div>
            <br/>
        <div>
             <h5>Present Value: { pv } </h5>
        </div>
    </div>
</div>
</div>
        )
    }

    render(){

        
        return(
        <div>
            { this.inputs() }
        </div>
        )
    }

}

export default connect()(PvPmtCalc)

