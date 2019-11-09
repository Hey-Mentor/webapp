import React, { Component } from "react";
import { MenteeContainerProps } from "./MenteeContainer.types";
import { Mentee } from "./Mentee";
import { tsImportEqualsDeclaration } from "@babel/types";

export class MenteeContainer extends React.Component<MenteeContainerProps> {
  constructor(props: MenteeContainerProps) {
    super(props);
  }

  public render() {
    const mentees = this.props.mentees.map(x => (
      <Mentee
        id={x.id}
        key={x.id}
        time={x.time}
        imgSrc={x.imgSrc}
        description={x.description}
        messageHighlight={x.messageHighlight}
        name={x.name}
        isSelected={x.id === this.props.selectedId}
      ></Mentee>
    ));
    return (
      <div
        style={{
          marginTop: "50px",
          borderTop: "1px",
          borderRight: "0px",
          borderLeft: "0px",
          borderBottom: "0px",
          borderStyle: "solid",
          borderColor: "grey"
        }}
      >
        {mentees}
      </div>
    );
  }
}
