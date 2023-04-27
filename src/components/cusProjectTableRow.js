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
                   <Link to={"/cusViewMoreProject/"+this.props.obj._id} className="btn btn-dark">View More</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-success">Join</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;