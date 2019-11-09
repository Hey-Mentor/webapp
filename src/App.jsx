import React, {Component} from 'react'
import Home from './Component/Home.js'
import './App.css';
import { fromEventPattern } from 'rxjs';
import  {Switch, Route, BrowserRouter} from 'react-router-dom'
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
                <BrowserRouter>
                <Switch>
                    <Route path="/" render={props=> <Home {...props} />}></Route>
                </Switch>
                
                
                
                </BrowserRouter>
                
                        
            );
      
  }
}