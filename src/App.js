// 7/21 JP Note: wrt Deliverable 2: In order to toggle the visibility of the NewPOemForm, I needed to add onClick={this.handleClick} to the button element, then define the handleClick function (which updates the newly-created state key that I named, "newPoemFormVisible". 

import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    newPoemFormVisible: false
  

  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(resp => resp.json())
    .then(poems => this.setState({poems}, () => console.log(poems)))
  }

  handleClick = e => {
    this.setState({newPoemFormVisible: !this.state.newPoemFormVisible})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick} >Show/hide new poem form</button>
          {/* {true && <NewPoemForm />} */}
          {(this.state.newPoemFormVisible ? <NewPoemForm /> : null)}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
