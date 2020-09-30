import React, { Component } from "react";

export default class Sidebar extends Component {
  state = {
    title: "",
    description: "",
    tag: "",
    token: "",
    modal: false,
  };

  componentDidMount() {
    this.setState({ token: localStorage.getItem("token") });
  }
  addPost = () => {
    fetch("https://community-forum-api.herokuapp.com/api/questions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: {
          title: this.state.title,
          description: this.state.description,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateQuestions();
      });
  };
  render() {
    return (
      <div>
        {this.state.modal ? (
          <div className="modal fixed inset-0 bg-gray-600 max-w-md max-h-md flex flex-col flex-no-wrap justify-around">
            <button onClick={(e) => this.setState({ modal: false })}>X</button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.addPost();
              }}
            >
              <input
                type="text"
                className="my-2"
                name="title"
                placeholder="Title"
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
              />
              <textarea
                name="descriptions"
                className="my-2"
                placeholder="Post description.."
                cols="30"
                rows="10"
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
              ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        ) : null}
        {this.state.token?.length > 1 ? (
          <button
            className="addPost my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde"
            onClick={(e) => this.setState({ modal: true })}
          >
            Start New Discussion
          </button>
        ) : null}
      </div>
    );
  }
}
