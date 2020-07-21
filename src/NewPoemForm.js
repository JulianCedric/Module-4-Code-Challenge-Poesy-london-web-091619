// 

import React from "react";

class NewPoemForm extends React.Component {
  state = {
    id: "",
    title: "", 
    content: "",
    author: ""
  }

  handleNewPoemFormSubmit = e => {
    e.preventDefault() 
    fetch("http://localhost:3000/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          id: this.state.id,
          title: this.state.title,
          content: this.state.content,
          author: this.state.author
        }
      )
    )
  }}

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleNewPoemFormSubmit}>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;