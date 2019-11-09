import React from 'react'

import { Button, Form, Icon, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import FacebookLogin from './FacebookLogin';
import {Redirect, Link, Switch, Route} from 'react-router-dom'
import heymentorsplash from './Assets/heymentorsplash.png'
import Register from './Register.jsx'
class LoginForm extends React.Component {

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
          this.setState({
            username: resultObject.user.name
          });
        } else {
          
        }
      }
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password:''
        }
      
    }
  
    
    componentDidMount()
    {
        console.log('mounted login!');
        return (
        <Redirect to="/"></Redirect>
        )
    }
    handleEvent = (event, newValue) =>
    {
        alert(this.state.password);
    }
    
    render()
    {
     //const {username} = this.state.username;

     return (

       

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
           
            <Grid.Column style={{ maxWidth: 500 }}>
            <Image src={heymentorsplash}></Image>
            <Header as='h2' color='teal' textAlign='center'>

                Login to your account
            </Header>

            <Form size='large'>
            
                <Segment stacked>

                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange = {(event,newValue) => this.setState({username:newValue})}/>

                <Form.Input fluid icon='lock' iconPosition='left'placeholder='Password' type='password' onChange = {(event,newValue) => this.setState({password:newValue})}/>



                <Button color='teal' fluid size='large' onClick={(event) => this.handleClick(event)}>

                    Login

                </Button>
                <FacebookLogin onLogin={this.onFacebookLogin}>
                    <Button color='facebook' fluid size='large'><Icon name='facebook'></Icon>Facebook Login</Button>
                </FacebookLogin>
                <Button color='white' fluid size='large'><Icon name='google'></Icon>Google Login</Button>
                </Segment>

            </Form>

            <Message>

                New Mentee? <Link to="/register">Sign Up As a Mentee</Link> <br/>
                New Mentor? <Link to='/registermentor'>Sign Up As a Mentor</Link>
            </Message>
            
       
            </Grid.Column>
                

        </Grid>

        )
    }


}


export default LoginForm