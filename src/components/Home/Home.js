import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//we imported Link from react-router-dom at the tome. the home component renders three buttons for the classes, and we wrapped them in a link component. 

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to="/classlist/MATH1010">
          <button className='btn'>Math 1010</button>
        </Link>
        <Link to="/classlist/ENG2010">
          <button className='btn'>English 2010</button>
        </Link>
        <Link to="/classlist/BIO2020">
          <button className='btn'>Biology 2020</button>
        </Link>
      </div>
    );
  }
}


// remember the sytax for link. example <Link (OPEN) then to= and your classlist.  Button will surround your class Name button and text script