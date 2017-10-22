import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imgData } from './Variable'

const jsPDF = require('jspdf')

class Jspdf extends React.Component {


    buildDoc = () => {
        
        var doc = new jsPDF()
        
        doc.setFontSize(40)
        
        doc.addImage(imgData, 'JPEG', 15, 0, 180, 220)
        doc.text(35, 25, 'Paranyan loves jsPDF')
        doc.save('wook.pdf')
    }

    render(){
        return(

            <button className='btn' onClick={() => this.buildDoc()}>Hey there buddy</button>

        )
    }
}

export default connect()(Jspdf);
