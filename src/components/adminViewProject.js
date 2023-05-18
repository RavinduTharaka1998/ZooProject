import  React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import ProjectTableRow from './adminViewProjectTableRow';

import './css/cusViewProject.css';
import zoo from './img/zoo.png';


export default  class adminViewProject extends  Component{


    constructor(props) {
        super(props);
        this.state = {projects : [], search:''};

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        axios.get('http://localhost:4000/zoo/')
            .then(response => {
                this.setState({projects : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.projects.map(function (object, i){
            return <ProjectTableRow obj = {object} key = {i}/>;
        });
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Project Report";
        const headers = [["Tittle","Owner", "Amount","Description", "Type","Duration", "Status"]];
    
        const data = this.state.projects.map(elt=> [elt.tittle, elt.owner, elt.amount, elt.description,elt.type, elt.duration,elt.status]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("projectReport.pdf")
      }


    render() {
        return(
            <div>
                {/* <div className='top'>
                    <div className='tittle'>
                           <h2>Animal Haven</h2>
                    </div>
                    <div className='item'>
                        <ul>
                            <li><a href = "">Home</a></li>
                            <li><a href = "">Booking</a></li>
                            <li><a href = "">Animals</a></li>
                            <li><a href = "" className = 'active'>Zoo Projects</a></li>
                            <li><a href = "">Contact Us</a></li>
                            <li><a href = "">About Us</a></li>
                            <li><a href = "">Profile</a></li>
                        </ul>
                    </div>
                </div> */}
                    <div class="sidebar">
                        <center>
                            <h2>Animal Haven</h2>
                            <h6>Admin Dashboard</h6>
                        </center>
                        <br/>
                        <li><a href = "">Home</a></li>
                            <li><a href = "">Booking</a></li>
                            <li><a href = "">Animals</a></li>
                            <li><a href = "" className = 'active'>Zoo Projects</a></li>
                            <li><a href = "">Contact Us</a></li>
                            <li><a href = "">About Us</a></li>
                            <li><a href = "">Profile</a></li>
                    </div>
                
                    <div class="content">

                            <br/>
                            <center>
                                <h1 style={{fontSize:40,color:'white',marginBottom:30}}>ADMIN PROJECT DASHBOARD</h1>
                                <img src = "https://wildanimalhealthfund.org/wp-content/uploads/2020/03/Zoo-Animals-Banner.jpeg" width="1000" height="300" style={{marginLeft:200}}/>
                            </center>
                        
                        <hr/>

                        <h2 style={{fontSize:40,color:'white',marginBottom:30}}>Customers Projects</h2>

                        <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                            </div>
                            <div className="form-group" style ={{float:'right'}}>
                                <a href ={"/adminSearchProject/"+this.state.search} style ={{float:'right',background:'#1ebad9',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                            </div>
                        </from>

                        <table className="table table-striped" style = {{marginTop :20,marginLeft:270,width:'80%',color:'white'}}>
                                    <thead>
                                        <tr>
                                            <th>Project Tittle</th>
                                            <th>Project Type</th>
                                            <th>Duration</th>
                                            <th>Stakeholders</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.tabRow()}
                                    </tbody>
                        </table>
                        <button className='btn btn-info' onClick={() => this.exportPDF()} style = {{marginTop :20,marginLeft:270,color:'white'}}>Export Result</button>
                        <br/>
                        <hr/>
                        <br/>
                    </div> 
                   
            </div>
        );
    }
}