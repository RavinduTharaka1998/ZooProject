import  React, {Component} from 'react';
import axios from 'axios';
import ProjectTableRow from './adminViewProjectTableRow';

import './css/cusViewProject.css';
import zoo from './img/zoo.png'

export default  class adminViewProject extends  Component{


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
                            <li><a href = "">Home</a></li>
                            <li><a href = "">Booking</a></li>
                            <li><a href = "">Animals</a></li>
                            <li><a href = "">Zoo Projects</a></li>
                            <li><a href = "">Contact Us</a></li>
                            <li><a href = "">About Us</a></li>
                            <li><a href = "">Profile</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                
                    <center>
                        <img src = "https://wildanimalhealthfund.org/wp-content/uploads/2020/03/Zoo-Animals-Banner.jpeg" width="1000" height="300"/>
                    </center>
                
                <hr/>

                <h2>Customers Projects</h2>

                <table className="table table-striped" style = {{marginTop :20}}>
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
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}