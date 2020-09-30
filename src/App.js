import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import PostDetails from "./components/PostDetails";
import * as api from "./fetch";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./App.css";

export default class App extends Component {
  state = {
    token: "",
    globalFeed: [],
    userObj: {},
  };

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("token"),
    });
    api.get("users/verify").then((data) => {
      this.setState({ userObj: data.user }, () => {
        console.log(this.state.userObj);
      });
    });

    this.updateQuestions();
  }

  updateToken = (token) => {
    localStorage.setItem("token", token);
    this.setState({ token: token || "" });
  };

  updateQuestions = () => {
    api
      .get("questions")
      .then(({ questions }) => this.setState({ globalFeed: questions }));
  };

  updateUserObj = (user) => {
    // localStorage.setItem("userId", id);
    this.setState({ userObj: user });
  };

  Private = () => {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Main
              token={this.state.token}
              questions={this.state.globalFeed}
              updateQuestions={this.updateQuestions}
            />
          )}
        />
        <Route
          path="/thread/:slug"
          exact
          component={(routerProps) => (
            <PostDetails
              token={this.state.token}
              {...routerProps}
              userId={this.state.userObj._id}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    );
  };
  Public = () => {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Main
              token={this.state.token}
              questions={this.state.globalFeed}
              updateQuestions={this.updateQuestions}
            />
          )}
        />
        <Route
          path="/login"
          exact
          component={() => (
            <Login
              updateToken={this.updateToken}
              updateUserObj={this.updateUserObj}
            />
          )}
        />
        <Route
          path="/thread/:slug"
          exact
          component={(routerProps) => (
            <PostDetails
              userId={this.state.userObj._id}
              token={this.state.token}
              {...routerProps}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    );
  };

  render() {
    return (
      <div className="App">
        <Header
          token={this.state.token}
          updateToken={this.updateToken}
          updateUserObj={this.updateUserObj}
        />
        {this.state.token ? this.Private() : this.Public()}
      </div>
    );
  }
}
