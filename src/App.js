import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import cusViewProject from './components/cusViewProject';
import cusAddProject from './components/cusAddProject';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={cusViewProject}/>
                        <Route exact path='/cusAddProject' component={cusAddProject}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;