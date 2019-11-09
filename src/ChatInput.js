import React from 'react';

import ThemeProvider from '@livechat/ui-kit';

class ChatInput extends React.Component{

    constructor(props){
        super(props)
        //set initial state
        this.state={chatInput:''};
        this.submitHandler = this.submitHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    textChangeHandler(event){
        this.setState({chatInput:event.target.value})
    }

    submitHandler(event){
        //prevent refresh
        event.preventDefault();
        this.props.onSend(this.state.chatInput)
        //clear input
        this.setState({chatInput:''})
    }
    render(){
        return(
            <form className='chat-input' onSubmit={this.submitHandler}>
                <input type='text'
                    onChange={this.textChangeHandler}
                    value={this.state.chatInput}
                    placeholder="Enter text here"
                    required/>
            </form>
        );
    }
}