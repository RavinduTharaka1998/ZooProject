import  React, {Component} from 'react';
import axios from 'axios';
import ProjectTableRow from './adminViewOneProjectTableRow';

import './css/cusViewProject.css';
import zoo from './img/zoo.png'

export default  class adminViewOneProject extends  Component{


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
        axios.get('http://localhost:4000/zoo/getoneprojet/'+this.props.match.params.id)
            .then(response => {
                this.setState({projects : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return <ProjectTableRow obj={this.state.projects}/>
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
                    <img src = "https://ichef.bbci.co.uk/images/ic/1200xn/p030rxw5.jpg" width="500"/>
                </center>
                <hr/>
                <h2>One Project Details...</h2>
                <centre>
                    {this.tabRow()}
                </centre>
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}