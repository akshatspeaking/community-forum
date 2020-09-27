import React, { Component } from 'react'
import Login from './Login';
import Tag from './Tag';

export default class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      tags: [""]
    }
  }
  render() {

    // (() => {
    //   const drawer = document.querySelector('.');
    //   const openButton = drawer.nextElementSibling;
    //   const closeButton = drawer.querySelector('sl-button[type="primary"]');
  
    //   openButton.addEventListener('click', () => drawer.show());
    //   closeButton.addEventListener('click', () => drawer.hide());
    // })();


    return (
      <div className="flexcol">
        <div className="nav-links flexcol">
        
        <button className="addPost">Start New Discussion</button>
          <button>Latest</button>
          <button>Following</button>
        </div>
        <div className="tags flexcol">
          <Tag />
          <Tag />

        </div>
        <Login />
      </div>
    )
  }
}
