import React, { Component } from 'react'
import Postcard from './Postcard';
import Sidebar from './Sidebar';

// import Reply from './Reply';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      global: [1, 3, 4, 6],
      following: [],
    }


  }
  render() {
    return (
      <div>
        <div className="flexrow main">
          <div className="flexcol list">
            <button>
              View Latest
            </button>
            {this.state.global.map(post => (<Postcard />))}
          </div>
          <Sidebar className="sidebar" />
        </div>
      </div>
    )
  }
}
