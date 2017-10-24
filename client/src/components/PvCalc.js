import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class PvCalc extends React.Component {
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
        let rate = interest / 100
        let pv = futureValue/ ((1 + rate)**years)
        let taxes
        pv = Math.round(pv)
        console.log(pv)
        if(pv){
            pv = pv
        } else {
            pv = 0 
        }
        tax =  1 - (tax / 100)  
        taxes = ( pv * tax )     
        taxes = Math.round(taxes)
        if(taxes){
            taxes = taxes
        } else {
            taxes = 0 
        }
        return(
        <div className="row">
            <div  id='fvCalc'>
            <div className="col">
                <h5>Today's Value of a future lump sum</h5>
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
                     <h5>Present Value: { pv }  </h5>
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


    render() {
        return(
            <div>
                { this.inputs() }
            </div>

        )
    }
}

export default connect()(PvCalc)