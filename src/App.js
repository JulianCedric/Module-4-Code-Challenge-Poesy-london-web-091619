// 7/21 JP Note: wrt Deliverable 2: In order to toggle the visibility of the NewPoemForm, I needed to add onClick={this.handleClick} to the button element, then define the handleClick function (which updates the newly-created state key that I named, "newPoemFormVisible". 
  // also: ternary to toggle show/hide of form
// 7/21 JP Note: wrt Deliverable 3: In progress - left off at NewPoemForm component.. fetch part.. 
  // .. continued: To create a poem means to create a new object / hash (of key/value pairs of the values of the input fields), added to the AoH's (all poems data). 
    // And in order to POST this new poem to both the front-end(virtual to real DOM) AND the back-end (db), we need to: (1) create a function that handles each change (user input) of each input field, and (2) within that function, create another function that handles the new poem OBJECT (which must be defined in App.js and take in the new poem as its argument)  


// 7/22 JP Notes: wrt Deliverable 3: breakdown is essentially this: 
  // state
  // handleSubmit (referring to the form element's onSubmit={this.handleSubmit})
  // handleChange (referring to each of the input elements' onChange={this.handleChange})
// wrtdeliverable 4: update
  // also: delete button added in practice version 

import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    newPoemFormVisible: false
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(resp => resp.json())
    .then(poems => this.setState({poems}, () => console.log(poems)))
  }

  handleClick = e => {
    this.setState({newPoemFormVisible: !this.state.newPoemFormVisible})
  }

///////////////////////////////////////////////// 
// we need to pass this function as a prop to the NewPoemForm component:

  handleNewPoem = (newPoem) => {
    this.setState({poems: [...this.state.poems, newPoem]})
  }

/////////////////////////////////////////////////

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick} >Show/hide new poem form</button>
          {/* {true && <NewPoemForm />} */}
          {(this.state.newPoemFormVisible ? <NewPoemForm handleNewPoem={this.handleNewPoem} /> : null)}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
