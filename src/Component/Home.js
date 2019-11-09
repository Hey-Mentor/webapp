import React, { Component } from 'react';
import { Input, Menu, Segment, Image } from 'semantic-ui-react';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export default class Home extends Component {
    componentDidMount()
    {
      this.state.activeItem = 'home'
    }
    state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state

    
        return (
          <div>
            
            <Menu pointing>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item 
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              />
              
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='mentors'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              
            </Menu>
    
            
          </div>
        )
      }
    
}
