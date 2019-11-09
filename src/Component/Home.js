import React, { Component } from 'react';
import { Input, Menu, Segment, Image, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class Home extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `login`;
    this.props.history.push(path);
  }
    componentDidMount()
    {
      this.state.activeItem = 'home'
    }
    state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
  }
  login = (e, {name}) => {
      this.routeChange();
  }

  render() {
    const { activeItem } = this.state

    
        return (
          <div>

    
            
          </div>
        )
      }
    
}
export default withRouter(Home)