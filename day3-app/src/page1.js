import React, { Component } from 'react';
import { Link } from "react-router-dom";

class page1 extends Component {
  render() {
    return (
      <div className="page1">
        <header>
	<h1>I LOVE YOU</h1> 
	<Link to="/">go back!</Link>
        </header>
      </div>
    );
  }
}

      

export default page1;
