import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import cusViewProject from './components/cusViewProject';
import cusViewMoreProject from './components/cusViewMoreProject';
import cusAddProject from './components/cusAddProject';


import adminViewProject from './components/adminViewProject';
import adminViewOneProject from './components/adminViewOneProject';
import adminEditProject from './components/adminEditProject';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={cusViewProject}/>
                        <Route exact path='/cusAddProject' component={cusAddProject}/>
                        <Route exact path='/cusViewMoreProject/:id' component={cusViewMoreProject}/>

                        <Route exact path='/adminViewProject' component={adminViewProject}/>
                        <Route exact path='/adminViewOneProject/:id' component={adminViewOneProject}/>
                        <Route exact path='/adminEditProject/:id' component={adminEditProject}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;