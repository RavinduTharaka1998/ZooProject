import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
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
                      <td> <Link to={"/"} className="btn btn-warning">Back</Link></td>
                   </tr>
                </table>
            </div>
        );
    }
}

export default TableRow;