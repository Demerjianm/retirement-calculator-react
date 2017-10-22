import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DetailedForm extends React.Component {

    state = { value: ''}


    detailedForm = () => {
        let {children, st, yearlySavings } = this.state
        console.log(this.state)
        return(
        <div className="row">
            <div className="" id='list'>
            <form>
            <div className="form-row">
                <div className="form-group col-md-9">
                <label className="form-control-label">How many Children?</label>
                <input type="text" 
                       className="form-control" 
                       id="children" 
                       placeholder="Children" 
                       onChange={this.props.handleChange}
                       value={this.state.children}
                       />
                </div>
                <div className="form-group col-md-3">
                <label className="form-control-label">What state will you live in?</label>
                <input type="text" 
                       className="form-control" 
                       id="st" 
                       placeholder="State" 
                       onChange={this.props.handleChange}
                       value={this.state.st}
                       />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-7">
                <label className="form-control-label">How much will you put away each year?</label>
                <input type="text" 
                       className="form-control" 
                       id="yearlySavings" 
                       placeholder="yearly Saved" 
                       onChange={this.props.handleChange}
                       value={this.state.yearlySavings}
                       />
                </div>
                </div>
                </form>
                </div>
                </div>
                
                )
        }



        render(){
            return(
                <div>
                    { this.detailedForm() }
                </div>
            )
        }

}

export default connect()(DetailedForm)