import React from 'react';
import config from '../config';
import messages from './Messages';
import input from './ChatInput';
import ThemeProvider from '@livechat/ui-kit';

class ChatApp extends React.Component{

   

    render(){
        return(
           <div className="chatheader">
               <h3 align="left">Username</h3>
               <h3 align="right">Profile</h3>
               <h3 align="right">Shared Media</h3>
               <Messages messages={this.state.messages}/>
               <ChatInput onSend={this.sendHandler}/>
           </div>
        );
    }
}


export default ChatApp;