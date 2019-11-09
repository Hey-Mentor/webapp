import React, { Component } from "react";
import { MenteeProps } from "./MenteeContainer.types";

export class Mentee extends React.Component<MenteeProps> {
  constructor(props: MenteeProps) {
    super(props);
  }

  public render() {
    const style: React.CSSProperties = {
      padding: "0.5em",
      fontSize: "1em",
      display: "flex",
      flexDirection: "row",
      minWidth: 400,
      borderTop: "0px",
      borderRight: "0px",
      borderBottom: "1px",
      borderLeft: "0px",
      borderStyle: "solid",
      borderColor: "grey",
      backgroundColor: this.props.isSelected ? "#D9F0F8" : "#FFFDFE"
    };

    const nameStyle: React.CSSProperties = {
      fontSize: "0.8em",
      paddingBottom: "0.5em"
    };

    const descriptionStyle: React.CSSProperties = {
      fontSize: "0.6em",
      paddingBottom: "0.5em"
    };

    const messageStyle: React.CSSProperties = {
      fontSize: "0.5em",
      maxWidth: "280px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    };
    const dateStyle: React.CSSProperties = {
      fontSize: "0.3em",
      alignSelf: "flex-end"
    };
    const imagestyle: React.CSSProperties = {
      maxHeight: "60px",
      maxWidth: "60px",
      borderRadius: "50%",
      marginRight: "25px"
    };

    return (
      <div
        style={style}
        className={`mentee ${this.props.isSelected ? "selected" : ""}`}
        onClick={() =>
          this.props.onMenteeSelected &&
          this.props.onMenteeSelected(this.props.id)
        }
      >
        <img src={this.props.imgSrc} style={imagestyle}></img>
        <div style={{ color: "#3B484E", width: "300px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px"
            }}
          >
            <div style={nameStyle}>{this.props.name}</div>
            <div style={dateStyle}>{this.props.time}</div>
          </div>
          <div style={descriptionStyle}>{this.props.description}</div>
          <div style={messageStyle}>{this.props.messageHighlight}</div>
        </div>
      </div>
    );
  }
}
