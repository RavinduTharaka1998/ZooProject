import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
    }
    deletesss(){
      axios.get('http://localhost:4000/zoo/admindeleteproject/'+this.props.obj._id)
          .then(this.setState({redirect: true}))
          .catch(err => console.log(err))
      alert("Customer Project Successfully Deleted....")
      window.location.replace('/adminViewProject');
   }
   accept(){
      axios.get('http://localhost:4000/zoo/adminacceptproject/'+this.props.obj._id)
          .then(this.setState({redirect: true}))
          .catch(err => console.log(err))
      alert("Customer Project Successfully Accepted....")
      window.location.replace('/adminViewProject');
   }
   reject(){
      axios.get('http://localhost:4000/zoo/adminrejectproject/'+this.props.obj._id)
          .then(this.setState({redirect: true}))
          .catch(err => console.log(err))
      alert("Customer Project Successfully Reject....")
      window.location.replace('/adminViewProject');
   }
    render() {
        return (
            <div className='pro-details'>
                <table className="table table-striped">
                   <tr>
                      <td style={{fontWeight:'bold'}}>Project Tittle</td>
                      <td>{this.props.obj.tittle}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Project Owner</td>
                      <td>{this.props.obj.owner}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Amount</td>
                      <td>Rs. {this.props.obj.amount}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Description</td>
                      <td>{this.props.obj.description}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Type</td>
                      <td>{this.props.obj.type}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Duration</td>
                      <td>{this.props.obj.duration}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Status</td>
                      <td>{this.props.obj.status}</td>
                   </tr>
                   <tr>
                      <td> 
                         <Link to={"/adminEditProject/"+this.props.obj._id} className="btn btn-success">Edit</Link> &nbsp;&nbsp;
                         <button onClick={this.deletesss} className="btn btn-danger">Delete</button> &nbsp;&nbsp;
                         <button onClick={this.accept} className="btn btn-info">Accept</button> &nbsp;&nbsp;
                         <button onClick={this.reject} className="btn btn-warning">Reject</button> &nbsp;&nbsp;
                         <Link to={"/adminViewProject"} className="btn btn-dark">Go Back</Link> &nbsp;&nbsp;
                      </td>
                   </tr>
                </table>
            </div>
        );
    }
}

export default TableRow;