import  React, {Component} from 'react';
import axios from 'axios';
import ProjectTableRow from './cusProjectTableRow';

import './css/cusViewProject.css';
import zoo from './img/zoo.png'

export default  class cusViewProject extends  Component{


    constructor(props) {
        super(props);
        this.state = {projects : []};
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

    render() {
        return(
            <div className='cusview'>
                <div className='top'>
                    <div className='tittle'>
                           <h2>Animal Haven</h2>
                    </div>
                    <div className='item'>
                        <ul>
                            <li><a href = "" >Home</a></li>
                            <li><a href = "">Booking</a></li>
                            <li><a href = "">Animals</a></li>
                            <li><a href = "" className = 'active'>Zoo Projects</a></li>
                            <li><a href = "">Contact Us</a></li>
                            <li><a href = "">About Us</a></li>
                            <li><a href = "">Profile</a></li>
                        </ul>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className='row'>
                    <div className="col">
                        <center>
                            <img src = {zoo} width="200"/>
                            <br/><br/>
                            <h3>Zoo Projects</h3>
                            <p>You can add new project</p>
                        </center>
                    </div>
                    <div className="col right">
                        <br/><br/>
                        <center>
                            <h3><a href = "/cusAddProject">Request <br/> New <br/>  Zoo Projects <br/>+</a></h3>
                        </center>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>

                <h2>Project History</h2>

                <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    <th>Project Tittle</th>
                                    <th>Project Type</th>
                                    <th>Duration</th>
                                    <th>Stakeholders</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                </table>
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}