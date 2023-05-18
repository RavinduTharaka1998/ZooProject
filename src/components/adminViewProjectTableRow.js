import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <tr>
                <td>
                   {this.props.obj.tittle}
               </td>
               <td>
                   {this.props.obj.type}
               </td>
               <td>
                   {this.props.obj.duration}
               </td>
               <td>
                   {this.props.obj.owner}
               </td>
               <td>
                   <Link to={"/adminViewOneProject/"+this.props.obj._id} className="btn btn-info">Get Action</Link>
               </td>
           </tr>
        );
    }
}

export default TableRow;