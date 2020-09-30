import React, { Component } from "react";
import Postcard from "./Postcard";
import Sidebar from "./Sidebar";

export default class Main extends Component {
  state = {
    following: [],
    token: "",
  };

  componentDidMount() {
    this.setState({ token: localStorage.getItem("token") });
  }

  render() {
    return (
      <div>
        <div className="flex justify-around">
          <div className="">
            <div className="list mx-auto max-w-lg">
              {this.props.questions.map((post) => (
                <Postcard key={post._id} {...post} />
              ))}
            </div>
          </div>
          <Sidebar
            className="sidebar max-w-sm"
            token={this.props.token}
            updateQuestions={this.props.updateQuestions}
          />
        </div>
      </div>
    );
  }
}
