import React from "react";
import Home from "./Component/Home.js";
import { MenteeContainer } from "./Component/MenteeComponent/MenteeContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <MenteeContainer mentees={getTestData()} selectedId={"2"} />
      </header>
    </div>
  );
}

function getTestData() {
  var mentees = [
    {
      id: "1",
      name: "Jim chakster",
      time: "4.15",
      imgSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Garner Senior high school, Senior",
      messageHighlight: "I've just applied to the UW design school."
    },
    {
      id: "2",
      name: "Chadwick Boseman",
      time: "Mon",
      imgSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Wakanda high school, Grade 12",
      messageHighlight: "Sounds great!"
    },
    {
      id: "3",
      name: "Stacy Miller",
      time: "5.30",
      imgSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Longwood High School, Grade 12",
      messageHighlight:
        "Hi Stacy! Please let me know if you have some time. this is an example of a very long description"
    }
  ];
  return mentees;
}
export default App;
