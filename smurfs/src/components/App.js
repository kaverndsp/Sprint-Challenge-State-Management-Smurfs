import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
     <h1>SMURF CITY</h1>
         <AddSmurf/>
        <SmurfList/>
        
      
       
      </div>
    );
  }
}

export default App;
