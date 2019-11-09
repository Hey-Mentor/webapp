import React from 'react';
import ThemeProvider from '@livechat/ui-kit';

class Message extends React.Component{

    render(){
        //css formatting
        const fromMe = this.props.fromMe ? 'from-me' : '';

        return(
            <div className={`message ${fromMe}`}>
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    message: '',
    username: '',
    fromMe: false
};

export default Message;