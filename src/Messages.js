import React from "react";
import ThemeProvider from '@livechat/ui-kit';

class Messages extends React.Component {

    componentDidUpdate(){
        //scroll to bottome when a new message is received
        const objDiv = document.getElementById('MessageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render(){
        //loop messages and create a message component
        const messages = this.props.messages.map((message,i) => {
            return(
                <Message
                    key={i}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe}/>
            )
        });

        return(
            <div className='messages' id='messageList'>
                {messages}
            </div>
        );
    }

}



export default Messages;