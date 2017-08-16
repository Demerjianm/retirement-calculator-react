import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Button, Container } from 'semantic-ui-react';
const jsPDF = require('jspdf')

class About extends React.Component {
    build = () => {
        var doc = new jsPDF()
        
        doc.text('Hello world!', 10, 10)
        doc.save('a4.pdf')
        }
    
    render() {
       
        return(
            <Container>
            <div>
          <Header as="h3">This is the about page</Header>
          </div>
          <div>
          <Button basic color='green' content='Save' icon='save' labelPosition='left' onClick={() => this.build()} />
          </div>
          </Container>
        
        )
    }   
}

export default withRouter(connect()(About))