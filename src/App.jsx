import React, {Component} from 'react'
import Register from './Component/Register.jsx'
import LoginForm from './Component/Login.jsx'
import RegisterMentor from './Component/RegisterMentor.jsx'
import './App.css';
import { fromEventPattern } from 'rxjs';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class App extends Component 
{
 constructor(props) 
  {
    super(props);
    this.state = {
      activeItem: 'home',
      loading: true,
      messages: [],
    };
  }
  render () 
  {
      
     
    
        
            return (
              <Router>
              <div>
                <Route exact path="/" component={LoginForm} />
                <Route path="/register" component={Register} />
                <Route path="/registermentor" component={RegisterMentor} />
               
              </div>
            </Router>
                
                        
            );
      
  }
}