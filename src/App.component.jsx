import './App.css';
import React, { Component } from 'react';


//import from Router Dom
import { Link, Route, Switch } from 'react-router-dom';

//import pages here
import HomePage from './Pages/HomePage.Component';
import AboutPage from './Pages/AboutPage.component';
import ServicePage from './Pages/ServicePage.component';
import ServicePageDetails from './Pages/ServicePageDetails.component';


class App extends Component {

  state ={

  }
  render(){
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/service" component={ServicePage}/>
          <Route path="/service/:serviceId" component={ServicePageDetails}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
    </div>
  );
  }
}

export default App;
