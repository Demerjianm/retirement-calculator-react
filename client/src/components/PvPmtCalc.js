import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class PvPmtCalc extends React.Component {

    state = { value: 1}

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }


    inputs = () => {

        let {futureValue, years, presentValue, interest, payment, tax} = this.state
        let rate = interest / 100
        let pv = futureValue / ((1 + rate)**years)
        console.log(pv)
        pv = Math.round(pv)
        let pmtPv = payment*((1 - ((1 + rate)**(-years)))/rate)
        console.log(pmtPv)
        let pvPmt = pv + pmtPv
        pvPmt = Math.round(pvPmt)
        let taxes
        tax =  1 - (tax / 100)  
        taxes = ( pvPmt * tax )     
        taxes = Math.round(taxes)

        return(
        <div>

        <div className="row">
        <div className="col" id='fvCalc'>
            <h5>Present Value of Pmt's and future lump sum</h5>
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
        <div className='row' id='wook'>
                    <div className='col'>
                <div className="input-group">
                    <span className="input-group-addon">Tax</span>
                    <input type="text" 
                        className="form-control" 
                        id="tax" 
                        placeholder="Tax %" 
                        onChange={this.handleChange}
                        value={this.state.tax}
                        />
                 </div>
                 </div>
            <br/>
        <div className='col'> 
             <h5>Present Value: { pvPmt } </h5>
        </div>
        </div>
        <div>
            <h4>After Tax: <b>{ taxes }</b></h4>
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

