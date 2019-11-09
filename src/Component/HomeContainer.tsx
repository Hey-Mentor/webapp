import { Component } from "react";
import { MenteeContainer } from "./MenteeComponent/MenteeContainer";
import { ChatContainer } from "./Chat/ChatContainer";
import React from "react";
import { MenteeProps } from "./MenteeComponent/MenteeContainer.types";

export interface HomeContainerProps {}

export interface HomeContainerState {
  selectedId: string;
}

export class HomeContainer extends React.Component<
  HomeContainerProps,
  HomeContainerState
> {
  constructor(props: HomeContainerProps) {
    super(props);
    this.state = {
      selectedId: "-1"
    };
  }

  public render() {
    const mentees: MenteeProps[] = this.getTestData();
    const selectedMentee: MenteeProps | undefined = mentees.find(
      x => x.id === this.state.selectedId
    );

    let name: string = "";
    if (selectedMentee && selectedMentee.name) {
      name = selectedMentee.name;
    }

    return (
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          fontSize: "24px"
        }}
      >
        <MenteeContainer
          onMenteeSelected={this.onMenteeSelected.bind(this)}
          mentees={mentees}
          selectedId={this.state.selectedId}
        />
        <ChatContainer name={name} />
      </div>
    );
  }

  private onMenteeSelected(selectedId: any) {
    console.log(selectedId);
    this.setState({
      selectedId: selectedId
    });
  }

  private getTestData() {
    var mentees = [
      {
        id: "1",
        name: "Jim chakster",
        time: "4.15",
        imgSrc:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Garner Senior high school, Senior",
        messageHighlight: "I've just applied to the UW design school.",
        isSelected: false
      },
      {
        id: "2",
        name: "Chadwick Boseman",
        time: "Mon",
        imgSrc:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Wakanda high school, Grade 12",
        messageHighlight: "Sounds great!",
        isSelected: false
      },
      {
        id: "3",
        name: "Stacy Miller",
        time: "5.30",
        imgSrc:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Longwood High School, Grade 12",
        messageHighlight:
          "Hi Stacy! Please let me know if you have some time. this is an example of a very long description",
        isSelected: false
      }
    ];
    return mentees;
  }
}
