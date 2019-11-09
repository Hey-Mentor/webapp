import React, { Component } from 'react';
import { Input, Menu, Segment, Image } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
export default class Home extends Component {
    componentDidMount()
    {
      console.log('mounted!');
    }
    state = {}

  handleItemClick = (e, { name }) => alert('Hello!')

  render() {
    const { activeItem } = this.state

    
        return (
          <div>
            <Image src='Assets/heymentorsplash.png'></Image>
            <Menu pointing>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
    
            
          </div>
        )
      }
    
}
