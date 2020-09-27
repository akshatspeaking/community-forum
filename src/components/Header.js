import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



export default class Header extends Component {
  render() {
    return (
      <div className="header bg-blue-900">
        <div className="logo border-gray-300 rounded">
        <NavLink exact to="/" >
        <svg id="Line" height="50" viewBox="0 0 64 64" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m18.5 36v24a3 3 0 0 0 3 3h38a3 3 0 0 0 3-3v-24a1 1 0 0 0 -1-1h-42a1 1 0 0 0 -1 1zm6 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 -1-1zm31 10h-15a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2z" fill="#c4a2fc"/><path d="m62.5 32v-4a3 3 0 0 0 -3-3h-38a3 3 0 0 0 -3 3v4a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1zm-30-4h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm-5 0h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm-5 0h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2z" fill="#c4a2fc"/><g fill="#151a6a"><path d="m38.088 4a3 3 0 0 0 -3-3h-31.588a2 2 0 0 0 -1.412 3.414l4 4v9.586a3 3 0 0 0 3 3h3.159a2.969 2.969 0 0 0 -.159.921v14.079a2.967 2.967 0 0 0 .185 1h-8.773a2 2 0 0 0 -1.415 3.414l4 4v3.586a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9h15a3 3 0 0 0 3-3v-9.586l4.006-4.005a2 2 0 0 0 -1.407-3.409l-8.772-.021a2.944 2.944 0 0 0 .176-.979zm-14 44a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-4a1 1 0 0 0 -.293-.707l-4.295-4.293h20.588zm18.293-22.707a1 1 0 0 0 -.293.707v10a1 1 0 0 1 -1 1h-26a1 1 0 0 1 -1-1v-14.079a1 1 0 0 1 .612-.921h31.98zm-33.293-6.293a1 1 0 0 1 -1-1v-10a1 1 0 0 0 -.288-.707l-4.3-4.293h31.588a1 1 0 0 1 1 1v14a.987.987 0 0 1 -.842.968z"/><path d="m31.088 7h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/><path d="m31.088 13h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/><path d="m19.088 25a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/><path d="m37.088 31h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/><path d="m12.088 44a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 -1 1z"/></g></svg>
        </NavLink>
        </div>
        <div className="search">
          <input type="text" name="search"/>
        </div>
        <div className="user-menu">
          <button>
            Login/Logout
          </button>
        </div>
      </div>
    )
  }
}
