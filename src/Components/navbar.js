import React, { Component } from 'react'

export class navbar extends Component {

  render() {
    return (
      <nav className="navbar  navbar-expand-lg navbar-dark bg-success">
  <a className="navbar-brand my-2" href="/">Daily News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/business">Business </a>
      </li><li className="nav-item active">
        <a className="nav-link" href="/science">Science</a>
      </li><li className="nav-item active">
        <a className="nav-link" href="/sports">Sports</a>
      </li><li className="nav-item active">
        <a className="nav-link" href="/entertainment">Entertainment</a>
      </li><li className="nav-item active">
        <a className="nav-link" href="/Technology">Technology</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/health">Health</a>
      </li>
     
      
    </ul>
  
  </div>
</nav>
    )
  }
  }

export default navbar
