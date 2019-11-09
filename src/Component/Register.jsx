  
import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Button, Form, Icon, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import heymentorsplash from './Assets/heymentorsplash.png'
//import { auth } from './Component/Firebase';
import _ from 'lodash';
class Register extends Component {
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
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
      const { name, lastname, phone, email, password} = this.state;
      if(this.state.password.value === this.state.validatedpassword.value)
      {
        alert('Validated');
      }
      else {
        alert('Not validated');
      }
    }
    updateNumber = (e) => {
      const val = e.target.value;
      // If the current value passes the validity test then apply that to state
      if (e.target.validity.valid) this.setState({phone : e.target.value});
      // If the current val is just the negation sign, or it's been provided an empty string,
      // then apply that value to state - we still have to validate this input before processing
      // it to some other component or data structure, but it frees up our input the way a user
      // would expect to interact with this component
      else if (val === '' || val === '-') this.setState({phone : val});
    }
    /*
    handleCreateAccount = () => {

      const { name, lastname, phone, email, password} = this.state;
      try {
        auth.createUserWithEmailAndPassword(email, password)
          .then(result => {
            const userID = _.isError(result.user.uid) ? "" : result.user.uid;
  
            if (!_.isEmpty(userID)) {
              let currentUserDefault = {};
              currentUserDefault.email = email;
              currentUserDefault.firstname = name;
              currentUserDefault.lastname = lastname;
              currentUserDefault.phone = phone;
  
              //const uri = 'https://middleware20190918112456.azurewebsites.net/api/Citizens';
              //const uri = 'https://opwwin1middle.azurewebsites.net/api/Citizens';
              //axios.post(uri, currentUserDefault, axiosConfig)
             // .then(() => {
                this.props.isAuthenticated({ authenticated: true });
              //})
             
              .catch((error) => {
                console.log(error); // eslint-disable-line no-console
                this.props.isAuthenticated({ authenticated: false });
              });
              
              //dbUsers.child(userID).update(currentUserDefault);
              //Utils.save('lockedscreen', false);
              
            }
          })
          .catch(e => {
            alert(e);
            this.setState({
              errorMsg: e.message
            });
          });
      } catch (error) {
        console.log(error);
      }
  
    }
    */
  
    render()
    {
      const {password} = this.state.password;
        return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            
            <Grid.Column style={{ maxWidth: 800 }}>
          <Form size='large'>
          <Image src={heymentorsplash} size='medium' verticalAlign='middle'></Image>
          <Header as='h2' color='teal' textAlign='center'>

Register for an account
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
export default withRouter(Register)