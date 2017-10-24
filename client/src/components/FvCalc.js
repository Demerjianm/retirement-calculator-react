import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class FvCalc extends React.Component {
    /*
    <div className="input-group">
    <label className="input-group-addon">Future Value</label>
    <input type="text" 
        className="form-control" 
        id="futureValue" 
        placeholder="Future Value" 
        onChange={this.handleChange}
        value={this.state.futureValue}
        defaultValue={futureValue}
        />
    </div>

    */

    state = {value: 0}

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }

    inputs = () => {
        console.log(this.state)

        let {futureValue, years, presentValue, interest, payment, tax} = this.state
        let fvAnswer, intAnswer, yrAnswer, pmtAnswer, pvAnswer
        let rate = interest / 100
        let fv = presentValue * ((1 + rate)**years)
        fv = Math.round(fv)

        if(fv){
            fv = fv
        } else {
            fv = 0 
        }
        let taxes
        tax =  1 - (tax / 100)  
        taxes = ( fv * tax )     
        taxes = Math.round(taxes)
        if(taxes){
            taxes = taxes
        } else {
            taxes = 0 
        }
        return(
        <div className="row">
            <div className="col" id='fvCalc'>
                <h5>Future value of a dollar today</h5>
                <div className="input-group">
                <span className="input-group-addon">Yrs</span>
                <input type="text" 
                    className="form-control" 
                    id="years" 
                    placeholder="Years" 
                    onChange={this.handleChange}
                    value={this.state.years}
                    defaultValue={yrAnswer}
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
                    defaultValue={intAnswer}
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
                    defaultValue={pvAnswer}
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
                     <h5>Future Value: { fv }  </h5>
                </div>
                </div>
                <div>
                    <h4>After Tax: <b>{ taxes }</b></h4>
                
                </div>

        </div>
        </div>
        )
    }


    render() {
        return(
            <div>
                { this.inputs() }
            </div>

        )
    }
}

export default connect()(FvCalc)