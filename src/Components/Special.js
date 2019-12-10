import React, { Component } from 'react';
 import { getSpecialTips, isAuthenticated } from '../repository';
 import { Redirect } from 'react-router-dom';

class Special extends Component {

constructor() {
 super();
 this.state = { tips: [], auth: true };
 }

componentDidMount() {
 if( isAuthenticated() )
 getSpecialTips().then((tips) => {
 this.setState({ tips });
 }).catch(err => {
 alert('User Not Authenticated');
 this.setState({auth: false}
 )})
 else{
 alert('User Not Authenticated');
 this.setState({auth: false})
 }
 }

render() {

return (
 <div>
 {(this.state.auth) ? '' : <Redirect to="/" />}
 <h3 className="text-center">Special Developer Tips</h3>
 <hr/>
 {
 this.state.tips.map((tip) => (
 <div className="col-sm-10 col-sm-offset-1" key={tip.id}>
 <div className="panel panel-success">
 <div className="panel-heading">
 <h3 className="panel-title">
 <span className="btn">#{ tip.id }</span></h3>
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
 export default Special;