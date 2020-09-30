import React, { Component } from "react";
import * as api from "../fetch";
import Reply from "./Reply";

export default class PostDetails extends Component {
  state = {
    question: null,
    answerInput: "",
  };

  componentDidMount() {
    this.updateQuestion();
  }
  updateQuestion = () => {
    api
      .get("questions/" + this.props.match.params.slug)
      .then(({ question }) => {
        this.setState({ question });
      });
  };

  addReply = () => {
    api
      .post("questions/" + this.props.match.params.slug + "/answers", {
        answer: {
          body: this.state.answerInput,
        },
      })
      .then((data) => {
        this.updateQuestion();
      });
  };

  render() {
    if (!this.state.question) return <h2>Loading...</h2>;
    return (
      <div className="max-w-xl mx-auto my-10">
        <h2 className="font-bold text-2xl">{this.state.question.title}</h2>
        <div className="subheading flex justify-between my-5">
          <h4>Author: {this.state.question.author.username}</h4>
          <h4 className="flex">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>{" "}
            {this.state.question.answers.length}
          </h4>
        </div>
        <p className="text-gray-700 my-3">{this.state.question.description}</p>

        {this.props.userObj?._id ? (
          <form
            className="my-5 flex"
            onSubmit={(e) => {
              e.preventDefault();
              this.addReply();
            }}
          >
            <input
              type="text"
              onChange={(e) => this.setState({ answerInput: e.target.value })}
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              placeholder="Reply.."
            />
            <button
              type="submit"
              className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded"
            >
              Post
            </button>
          </form>
        ) : (
          <p className="my-5">You must be logged in to post replies!</p>
        )}
        <div className="answers">
          <ul>
            {this.state.question.answers
              ? this.state.question.answers.map((answer) => (
                  <Reply
                    key={answer._id}
                    answer={answer}
                    slug={this.props.match.params.slug}
                    updateQuestion={this.updateQuestion}
                    userId={
                      this.props.userObj?._id ? this.props.userObj?._id : ""
                    }
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}
