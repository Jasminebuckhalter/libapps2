import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar.js'
import Dashboard from './component/Dash.js'
import Details from './component/Details.js'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Newproject from './component/Newproject'
import GuidesLayout from "./component/GuidesLayout";




class App extends Component {
    render() {
    return (
    <BrowserRouter>  
      <div className="App">
          <Navbar  />
          <Switch>
            <Route exact path ='/' component={Dashboard} />
            <Route path ='/note/:id' component={Details} />
            <Route path = '/signin' component={Signin}/>
            <Route path = '/signup' component={Signup}/>
            <Route path = '/create' component={Newproject}/>
            <Route path = '/guideslayout' component={GuidesLayout}/>
          </Switch>

        
        
      </div>
    </BrowserRouter> 
    )
  }
}
 
export default App;
