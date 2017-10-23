import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Results extends React.Component {
//** means power of
//Payment x (((1+ int rate)**(period)  - 1) / rate)

    results = () => {
        console.log(this.props)
        let {name, age, currentSaving, retirementAge, desiredIncome, riskLevel, children, st, yearlySavings } = this.props
        let yearsToRetirement = retirementAge - age
        let rate = (riskLevel/100)
        let compoundedRate = rate ** yearsToRetirement
        let lumpSum = 0
        lumpSum =  currentSaving * ((1 + rate)**yearsToRetirement)
        lumpSum = Math.round(lumpSum)
        let total = 0
        total = (yearlySavings * ((((1 + rate)**yearsToRetirement) - 1) / rate)) + lumpSum
        total = Math.round(total)
        console.log(yearlySavings)
        console.log(rate)
        console.log(compoundedRate)
        console.log(total)


        return (
        <div>
            <h2>Hello <b>{name}</b></h2>
            <h4>Age: { age } </h4>
            <h5>Children:{ children }</h5>
            <h5>State: { st }</h5>

            <h3>Good work, { name }!! Just keep saving and at { retirementAge } you 
            should be sitting pretty with ${ total }. Good luck and come back whenever you want
            to see if youre on pace :) </h3>
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