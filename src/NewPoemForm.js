import React from 'react';

class NewPoemForm extends React.Component {

  // this state's keys are e.target.name 
  // this state's keys' values are e.target.value (USER INPUT per field)
  state = {  
    id: "",
    title: "",
    author: "",
    content: ""
  }

///////////////////////////////////////////////// 
 
  handleChange = e => {
    this.setState({[e.target.namee]: e.target.value})
  }

///////////////////////////////////////////////// 

  handleSubmit = e => {
  e.preventDefault()
  fetch("http://localhost:3000/poems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(this.state)
  })
    .then(resp => resp.json())
    .then(newPoemObject => this.props.handleNewPoem(newPoemObject), 
      this.setState({
        id: "", 
        title: "", 
        author: "", 
        content: ""})
      )
  }

///////////////////////////////////////////////// 

  render() { 
    return (  
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="id" name="id" value={this.state.id} onChange={this.handleChange} />
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange} />
        <textarea name="content" placeholder="Write your masterpiece here..." value={this.state.content} onChange={this.handleChange} rows={10} />
        <button type="submit">Submit Your Poem</button>
      </form>
    );
  }
}
 
export default NewPoemForm;













// // 

// import React from "react";

// class NewPoemForm extends React.Component {
//   state = {
//     id: "",
//     title: "", 
//     content: "",
//     author: ""
//   }

//   handleChange = e => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   handleNewPoemFormSubmit = e => {
//     e.preventDefault() 
//     fetch("http://localhost:3000/poems", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(
//         {
//           id: this.state.id,
//           title: this.state.title,
//           content: this.state.content,
//           author: this.state.author
//         }
//       )
//     }
//     .then(resp = resp.json())
//     .then(newPoemObject => this.props.handleNewPoem(newPoemObject),
//       this.setState({
//         id: "", 
//         title: "",
//         content: "",
//         author: ""
//       }))
//   )


//   render(){

//     return (
//       <form className="new-poem-form" onSubmit={this.handleNewPoemFormSubmit}>
//         <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
//         <input name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange} />
//         <textarea name="content" placeholder="Write your masterpiece here..." value={this.state.content} onChange={this.handleChange} rows={10} />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };
// }
// }

// export default NewPoemForm;

