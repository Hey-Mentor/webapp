import React from "react";
import Home from "./Component/Home.js";
import { MenteeContainer } from "./Component/MenteeComponent/MenteeContainer";
import "./App.css";
import { ChatContainer } from "./Component/Chat/ChatContainer";
import { HomeContainer } from "./Component/HomeContainer";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <div className="App">
        <header className="App-header">
          <Home></Home>
        </header>
      </div>
      <HomeContainer />
    </div>
  );
}

export default App;
