import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Jspdf from './Jspdf'
import Results from './Results'
import DetailedForm from './DetailedForm'
import GeneralForm from './GeneralForm'


class UserForm extends React.Component {

    state = { value: ''}

    handleChange = (e) => {
        let { target: { id, value }} = e;
        this.setState({ [id]: value });
      }

    dashboard = () => {
        console.log(this.state)
        if(this.state.detailedCheckbox!='yes') {
        return (
            <GeneralForm 
                handleChange={this.handleChange}
            />

        ) } else {
            return(
                <DetailedForm
                    handleChange={this.handleChange}
                 />
            )
        }
    }
    


    render(){
        let {name, age, currentSaving, retirementAge, desiredIncome, detailedCheckbox, riskLevel, id, children, st, yearlySavings } = this.state
        console.log(this.state)
        return(
            <div className='container'>
            <div className='row'>
            <div className='col col-lg-6 col-md-6' >
            { this.dashboard() }
            </div>
            <div className='col col-lg-6 col-md-6'>
            <Results                     
                name={name}
                retirementAge={retirementAge}
                age={age}
                currentSaving={currentSaving}
                desiredIncome={desiredIncome}
                riskLevel={riskLevel}
                children={children}
                st={st}
                yearlySavings={yearlySavings}/>
            </div>
            </div>
            </div>
            
        )
    }

}



export default connect()(UserForm);
