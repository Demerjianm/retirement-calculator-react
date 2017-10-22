import React from 'react';
import { connect } from 'react-redux';

class GeneralForm extends React.Component {

    state = { value: ''}

    render(){

        let {name, age, currentSaving, retirementAge, desiredIncome, riskLevel, detailedCheckbox} = this.state
        return(
        <div className="row">
            <div className="" id='list'>
            <h3>Please fill out the information below as correctly as possible. If you dont feel comfortable filling it out please leave blank.</h3>
            <form>
            <div className="form-row">
                <div className="form-group col-md-9">
                <label className="form-control-label">Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       placeholder="Name" 
                       onChange={this.props.handleChange}
                       value={this.state.name}
                       />
                </div>
                <div className="form-group col-md-3">
                <label className="form-control-label">Age</label>
                <input type="text" 
                       className="form-control" 
                       id="age" 
                       placeholder="Age" 
                       onChange={this.props.handleChange}
                       value={this.state.age}
                       />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-7">
                <label className="form-control-label">Current Amount Saved</label>
                <input type="text" 
                       className="form-control" 
                       id="currentSaving" 
                       placeholder="Amount Saved" 
                       onChange={this.props.handleChange}
                       value={this.state.currentSaving}
                       />
                </div>
                <div className="form-group col-md-5">
                <label className="form-control-label">Desired Retirement Age</label>
                <input type="text" 
                       className="form-control" 
                       id="retirementAge" 
                       placeholder="Retirement Age" 
                       onChange={this.props.handleChange}
                       value={this.state.retirementAge}
                       />
                </div>
                </div>
                <div className='form-row'>
                <div className="form-group">
                <label className="form-control-label">Desired Income through Retirement</label>
                <input type="text" 
                       className="form-control" 
                       id="desiredIncome" 
                       placeholder="Desired Retirement income"
                       onChange={this.props.handleChange}
                       value={this.state.desiredIncome}
                        />
                </div>
               
                <div className="col-auto" id='dropdownRisk'>
                <label className="mr-sm-2" for="inlineFormCustomSelect">Risk level</label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" 
                        id="riskLevel"
                        onChange={this.props.handleChange}
                        >
                  <option selected>Choose...</option>
                  <option value="12">High</option>
                  <option value='9'>Medium</option>
                  <option value="6">Low</option>
                </select>
                </div>
                </div>
                <div className='col-7' id='detailedQuestion'>
                    <div className="input-group">
                        <label className="form-control-label">Would you like to get more detailed?</label>
                        <input id='detailedCheckbox'type="checkbox" aria-label="Checkbox for following text input" value='yes' onChange={this.props.handleChange} />   
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
                
            </form>
            </div>
        </div>

        )
    }

}

export default connect()(GeneralForm)