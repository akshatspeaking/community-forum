import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        {/* Login*/}
      <form onSubmit={(e) => {
        e.preventDefault();
        }}>
        <input type="text" name="email"/>
        <input type="password" name="password"/>
        <button type="submit">LogIn</button>
      </form>
      {/* Sign Up */}
  <form onSubmit={(e) => {
        e.preventDefault()
        }}>
        <input type="text" name="email"/>
        <input type="password" name="password"/>
        <input type="password" name="password2"/>
        <button type="submit">SignUp</button>
      </form>
      </div>
    )
  }
}
