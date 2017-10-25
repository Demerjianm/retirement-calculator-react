import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class FvPmtCalc extends React.Component {

    state = { value: 0}

    

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }

     inputs = () => {
        let {futureValue, years, presentValue, interest, payment, tax} = this.state
        let rate = interest / 100
        let fv = presentValue * ((1 + rate)**years)
        fv = Math.round(fv)
        let pmtFv = (payment * ((((1 + rate)**years) -1) / rate))
        let fvPmt = fv + pmtFv
        fvPmt = Math.round(fvPmt)

        let taxes
        tax =  1 - (tax / 100)  
        taxes = ( fvPmt * tax )     
        taxes = Math.round(taxes)



       return(
        <div>
        <div className="row">
        <div className="col" id='fvCalc'>
            <h5>Future value of dollars today & payments at regular intervals</h5>
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
                <label className="input-group-addon">PV</label>
                <input type="text" 
                className="form-control" 
                id="presentValue" 
                placeholder="Present Value" 
                onChange={this.handleChange}
                value={this.state.presentValue}
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
             <h5>Future Value: { fvPmt } </h5>
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

export default connect()(FvPmtCalc)