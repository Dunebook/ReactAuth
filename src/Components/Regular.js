import React, { Component } from 'react';
import { getRegularTips } from '../repository';

class Regular extends Component {

  constructor() {
    super();
    this.state = { tips: [] };
  }

  componentDidMount() {
    getRegularTips().then((tips) => {
      this.setState({ tips });
    });
  }

  render() {

    return (
      <div>
        <h3 className="text-center">Regular Developer Tips</h3>
        <hr/>
        { 
          this.state.tips.map((tip) => (
              <div className="col-sm-10 col-sm-offset-1" key={tip.id}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ tip.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { tip.content } </p>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
    );
  }
}

export default Regular;