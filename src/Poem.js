import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>-{this.props.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
