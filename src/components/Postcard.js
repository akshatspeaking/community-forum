import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Postcard extends Component {
  render() {
    return (
      <NavLink to="/thread">
      <div className="flexcol postcard">
      <div className="flexrow">
          {/* avatar here */}
        <div className="flexcol col1">
          <h3>
            This is the post heading
          </h3>
          <h4>
            Last reply by akshatspeaking 23 hrs ago.
          </h4>
        </div>
        <div className="flexcol col2">
          {/* avatar here */}
          <p>25 replies</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi aut, mollitia optio saepe quo similique quisquam.
      </p>
      </div>
      </NavLink>
    )
  }
}
