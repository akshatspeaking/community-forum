import React, { Component } from "react";
import * as api from "../fetch";
import { withRouter } from "react-router";

class Login extends Component {
  state = {
    activeTab: "login",
    loginUsername: "",
    loginPassword: "",
    signupEmail: "",
    signupUsername: "",
    signupPassword1: "",
    signupPassword2: "",
    flash: false,
    flashmsg: "",
  };

  loginUser = () => {
    api
      .post("users/login", {
        user: {
          email: this.state.loginUsername,
          password: this.state.loginPassword,
        },
      })
      .then((data) => {
        localStorage.setItem("token", data.user.token);
        this.props.updateToken(data.user.token);
        this.props.updateUserObj(data.user);
        return this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ flashmsg: "User validation failed", flash: true });
      });
  };
  registerUser = () => {
    if (this.state.signupPassword2 !== this.state.signupPassword1) {
      return console.log("Passwords don't match");
    }
    fetch("https://community-forum-api.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: this.state.signupEmail,
          username: this.state.signupUsername,
          password: this.state.signupPassword2,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.user.token);
        this.props.updateUserObj(data.user);
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ flashmsg: "User validation failed", flash: true });
      });
  };

  render() {
    return (
      <div className="my-5">
        {this.state.flash ? (
          <div className="flash fixed top-0 bg-gray-600">
            <button onClick={(e) => this.setState({ flash: false })}>X</button>
            <p>{this.state.flashmsg}</p>
          </div>
        ) : null}

        <div className="menu flex max-w-md mx-auto my-5">
          <button
            className={
              this.state.activeTab === "login"
                ? "border-b-2 border-blue-500 mx-2 p-1"
                : "mx-2 p-1"
            }
            onClick={(e) => {
              this.setState({ activeTab: "login" });
            }}
          >
            LogIn
          </button>
          <button
            className={
              this.state.activeTab === "signup"
                ? "border-b-2 border-blue-500 mx-2 p-1 "
                : "mx-2 p-1"
            }
            onClick={(e) => {
              this.setState({ activeTab: "signup" });
            }}
          >
            SignUp
          </button>
        </div>
        {this.state.activeTab === "login" ? (
          <form
            className="flex flex-col max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              this.loginUser();
            }}
          >
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              type="email"
              name="loginemail"
              placeholder="Email"
              onChange={(e) => {
                this.setState({ loginUsername: e.target.value });
              }}
            />
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              type="password"
              name="loginpassword"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ loginPassword: e.target.value });
              }}
            />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5"
              type="submit"
            >
              LogIn
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              this.registerUser();
            }}
          >
            <input
              type="email"
              name="signupemail"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              placeholder="Email"
              onChange={(e) => {
                this.setState({ signupEmail: e.target.value });
              }}
            />
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              type="text"
              name="signupusername"
              placeholder="Username"
              onChange={(e) => {
                this.setState({ signupUsername: e.target.value });
              }}
            />
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              placeholder="Password"
              type="password"
              name="signuppassword"
              onChange={(e) => {
                this.setState({ signupPassword1: e.target.value });
              }}
            />
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              type="password"
              name="signuppassword2"
              placeholder="Repeat Password"
              onChange={(e) => {
                this.setState({ signupPassword2: e.target.value });
              }}
            />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5"
              type="submit"
            >
              SignUp
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
