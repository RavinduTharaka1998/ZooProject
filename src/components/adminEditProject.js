import  React, {Component} from 'react';
import axios from 'axios';

import './css/cusAddProject.css';

export default  class adminEditProject extends  Component{


    constructor(props){
        super(props);

        this.onChangeTittle = this.onChangeTittle.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tittle: '',
            owner: '',
            amount:'',
            description:'',
            type:'',
            duration:'',
            status:''
        }
    }
    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/zoo/editproject/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    tittle: res.data.tittle,
                    owner: res.data.owner,
                    amount: res.data.amount,
                    description: res.data.description,
                    type: res.data.type,
                    duration: res.data.duration
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }
    onChangeTittle(e){
        this.setState( {
           tittle: e.target.value
        });
    }
    onChangeOwner(e){
        this.setState( {
            owner: e.target.value
        });
    }
    onChangeAmount(e){
        this.setState( {
            amount: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState( {
            description: e.target.value
        });
    }
    onChangeType(e){
        this.setState( {
            type: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState( {
            duration: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.state.status = "pendding";
        //alert( this.state.status)
        const obj = {
            tittle : this.state.tittle,
            owner : this.state.owner,
            amount : this.state.amount,
            description : this.state.description,
            type : this.state.type,
            duration : this.state.duration,
            status : this.state.status
        };

        
                        axios.post('http://localhost:4000/zoo/updateproject/'+this.props.match.params.id,obj)
                        .then(res => {
                            alert("Project Update Successfully");
                            this.setState({
                                tittle: '',
                                owner: '',
                                amount:'',
                                description:'',
                                type:'',
                                duration:''
                    
                            })
                            console.log(res.data)});
                        // this.props.history.push('/signIn');
                        window.location.replace('/adminViewProject');
                   
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
                            <li><a href = "/">Home</a></li>
                            <li><a href = "">Booking</a></li>
                            <li><a href = "">Animals</a></li>
                            <li><a href = "">Zoo Projects</a></li>
                            <li><a href = "">Contact Us</a></li>
                            <li><a href = "">About Us</a></li>
                            <li><a href = "">Profile</a></li>
                        </ul>
                    </div>
                </div>
                <br/>
                <hr/> */}

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
                    <div className="container">
                        <br/>
                        <h3 className="text-center" style={{fontSize:30,color:'white',marginBottom:30}}>Edit Current Project</h3>
                        <hr/>
                        <br/>
                         <center>
                            <img src = "https://cdn-cashy-static-assets.lucidchart.com/marketing/blog/2017Q3/phases-project-management-lifecycle/phases-project-management-lifecycle-header.png" width ="350" height="200"/>
                         </center>
                        <br/>
                        <hr/>
                        <form onSubmit={this.onSubmit} style = {{marginTop :20,marginLeft:240,width:'80%',color:'white'}}>
                            <div className="form-group">
                                <label>Project Tittle :</label>
                                <input type ="text" required  className="form-control" value={this.state.tittle} onChange = {this.onChangeTittle}/>
                            </div>
                            <div className="form-group">
                                <label>Project Owner :</label>
                                <input type ="text" required className="form-control" value={this.state.owner} onChange = {this.onChangeOwner}/>
                            </div>
                            <div className="form-group">
                                <label>Budgeted Amount (Rs.) :</label>
                                <input type ="number" min = "1000" required className="form-control" value={this.state.amount} onChange = {this.onChangeAmount}/>
                            </div>
                            <div className="form-group">
                                <label>Description :</label>
                                <textarea value={this.state.description} onChange = {this.onChangeDescription} className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>project Type :</label>
                                <input type ="text" required className="form-control" value={this.state.type} onChange = {this.onChangeType}/>
                            </div>
                            <div className="form-group">
                                <label>Project Duration (Days):</label>
                                <input type ="number" required className="form-control" value={this.state.duration} onChange = {this.onChangeDuration}/>
                            </div>

                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Project" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <hr/>
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}