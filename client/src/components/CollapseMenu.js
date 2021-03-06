import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import FvCalc from './FvCalc'
import PvCalc from './PvCalc'
import PvPmtCalc from './PvPmtCalc'
import FvPmtCalc from './FvPmtCalc'

class CollapseMenu extends React.Component {
    
    render(){
        return (
            <div>
          <p>
            <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
          </p>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                    <FvCalc />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  <PvCalc />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample3">
                <div className="card card-body">
                  <PvPmtCalc />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample4">
                <div className="card card-body">
                  <FvPmtCalc />
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default connect()(CollapseMenu)