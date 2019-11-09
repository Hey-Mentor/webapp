import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Button, Form, Icon, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import heymentorsplash from './Assets/heymentorsplash.png'
//import { auth } from './Component/Firebase';
class RegisterMentor extends Component {
    constructor(props){
      super(props);
      this.state={
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        validatedpassword: '',
      }
    }
    render()
    {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            
            <Grid.Column style={{ maxWidth: 800 }}>
          <Form size='large'>
          <Image src={heymentorsplash} size='medium' verticalAlign='middle'></Image>
          <Header as='h2' color='teal' textAlign='center'>

Mentors: Register for an account
</Header>
          <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' onChange = {(event,newValue) => this.setState({name:newValue})}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' onChange = {(event,newValue) => this.setState({lastname:newValue})}/>
          <Form.Input fluid icon= 'phone' iconPosition='left' placeholder='Phone' type='tel' onChange = {this.updateNumber} pattern="^-?[0-9]\d*\.?\d*$"/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange = {(event,newValue) => this.setState({email:newValue})}/>

          <Form.Input fluid icon='lock' iconPosition='left'placeholder='Password' type='password' onChange = {(event,newValue) => this.setState({password:newValue})}/>
          <Form.Input fluid icon='lock' iconPosition='left'placeholder='Validate Password' type='password' onChange = {(event,newValue) => this.setState({validatedpassword:newValue})}/>



          <Button color='blue' fluid size='large' onClick={(event) => this.handleClick(event)}>

              Register

          </Button>
          </Segment>
          <Message>Already have an account? <Link to="/"> Login </Link> <br />
          <a href='https://www.heymentor.org/'>Visit our website</a></Message>
      </Form>
      </Grid.Column>
                

                </Grid>
        )
    }
}
export default withRouter(RegisterMentor)