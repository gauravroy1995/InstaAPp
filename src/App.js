import React, { Component } from "react";
import axios from "axios";
import Photo from "./Photo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo />
      </div>
    );
  }
}

export default App;
