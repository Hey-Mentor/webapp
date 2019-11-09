import React, { Component } from "react";
import { ChatContainerProps, ChatContainerState } from "./ChatContainer.types";
import { ChatFeed, Message } from "react-chat-ui";

export class ChatContainer extends React.Component<
  ChatContainerProps,
  ChatContainerState
> {
  constructor(props: ChatContainerProps) {
    super(props);
    this.state = {
      isTyping: false,
      messages: [
        new Message({
          id: 1,
          message: "Please select a mentor to start chatting"
        }), // Gray bubble
        new Message({ id: 0, message: "I'm you -- the blue bubble!" }) // Blue bubble
      ]
    };
  }

  public render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <div>{this.props.name}</div>
        <ChatFeed
          messages={this.state.messages} // Boolean: list of message objects
          isTyping={this.state.isTyping} // Boolean: is the recipient typing
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          // JSON: Custom bubble styles
          bubbleStyles={{
            text: {
              fontSize: 14
            },
            chatbubble: {
              borderRadius: 80,
              padding: 10
            }
          }}
        />
      </div>
    );
  }
}
