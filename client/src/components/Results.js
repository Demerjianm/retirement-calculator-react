import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Results extends React.Component {



    results = () => {
        console.log(this.props)
        let {name, age, currentSaving, retirementAge, desiredIncome, riskLevel, children, st, yearlySavings } = this.props
        let yearsToRetirement = retirementAge - age
        let totalRetirement =  currentSaving * ((1 + (riskLevel/100))**yearsToRetirement)
        totalRetirement = Math.round(totalRetirement)

        return (
        <div>
            <p>Hello {name}, you are { children }doing good. If you keep saving at this pace you will be able to retire at {retirementAge} with <b>${totalRetirement}</b></p>

            <h4>{ children }</h4>
            <h5>{ st }</h5>
            <h5>{ yearlySavings } </h5>
        
        </div>
        )
    }

    render(){
        return(
            <div>
                { this.results() }
            </div>
        )
    }
}


export default connect()(Results);