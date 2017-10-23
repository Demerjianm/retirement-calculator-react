import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Calc extends React.Component {

    state = {value: ''}

    inputs = () => {
        console.log(this.state)

        let {futureValue, years, presentValue, interest, payment} = this.props
        let fvAnswer, intAnswer, yrAnswer, pmtAnswer, pvAnswer
        let rate = interest / 100
        let calculation = presentValue * ((1 + rate)**years)
        console.log(calculation)
        return(
        <div className="row">
            <div className="" id='list'>
            <form>
                <div className="form-row">
                <div className="form-group col-md-2">
                <label className="form-control-label">Future Value</label>
                <input type="text" 
                    className="form-control" 
                    id="futureValue" 
                    placeholder="Future Value" 
                    onChange={this.props.handleChange}
                    value={this.state.futureValue}
                    defaultValue={futureValue}
                    />
                </div>
                <div className="form-group col-md-2">
                <label className="form-control-label">Years</label>
                <input type="text" 
                    className="form-control" 
                    id="years" 
                    placeholder="Years" 
                    onChange={this.props.handleChange}
                    value={this.state.years}
                    defaultValue={yrAnswer}
                    />
                </div>
                <div className="form-group col-md-2">
                <label className="form-control-label">Payment</label>
                <input type="text" 
                    className="form-control" 
                    id="payment" 
                    placeholder="Payment" 
                    onChange={this.props.handleChange}
                    value={this.state.payment}
                    defaultValue={pmtAnswer}
                    />
                </div>
                <div className="form-group col-md-2">
                <label className="form-control-label">Interest</label>
                <input type="text" 
                    className="form-control" 
                    id="interest" 
                    placeholder="Interest Rate" 
                    onChange={this.props.handleChange}
                    value={this.state.interest}
                    defaultValue={intAnswer}
                    />
                </div>
                <div className="form-group col-md-2">
                <label className="form-control-label">Present Value</label>
                <input type="text" 
                    className="form-control" 
                    id="presentValue" 
                    placeholder="Present Value" 
                    onChange={this.props.handleChange}
                    value={this.state.presentValue}
                    defaultValue={pvAnswer}
                    />
                </div>
                </div>
        </form>
                <div>
                    <h5>{ calculation} </h5>
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

export default connect()(Calc)