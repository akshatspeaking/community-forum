import React, { Component } from 'react'

export default class Tag extends Component {
  constructor(){
    super();
    this.state = {
      tags: [1, 2, 3 ]
    };
  }
  render() {
    return (
      <div>
        {this.state.tags.map(tag => (
          <div className="flexrow">
            <div className="circle" ></div>
            <p>Tag Name</p>
          </div>
        ))}
      </div>
    )
  }
}
