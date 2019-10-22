import React, { Component } from 'react';
import axios from 'axios';
//^^ installed axios by using npm install --save axios, and then imported it at the top of our component. 


//initialed stated and have a property called students that equals an empty array. this is where we will store our returned data form hitting the json server.

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  // create a componentDidMount lifecycle method. this will allow us to get our students as soon as possible. 
  //since we are fetching data, we will make a GET request. where the class equals the current class page. React automatically passes down a couple props into the routeable components for us to use, including match. this is an object witha bunch of useful inforamtion/ one of the properties on match is params. this is wehre we can see the value of any route parameters. our route parameter is called class so we can access it by using this.props.match.params.class
  // SO, our get request url should look like it does below, and then we can capture the resutls of the api request and use setState to update the value of students in the results data
  componentDidMount() {
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }
  // now that we have our students coming in from our json server, we need to map in the render method to render each students first and last name in an h3 element. rememnber the react requires mapped elements to have a unique key property. in this case, we will just use the index of the map. this is demonstrated in the "const" students variable we just created. 
  render() {
    const students = this.state.students.map((student, i) => (
      <h3 key={i} > {student.first_name} {student.last_name}</h3>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}

// we rendered the students below the h2 tag in the return. 
// last we updated the h1 element to display the current class. just like how we access the route parameter for our axios request, we can do the same thing here using {} in our jsx