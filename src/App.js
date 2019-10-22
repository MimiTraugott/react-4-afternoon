//installing the react router dom package, that will allow us to use routing in a react application. we install it by running NPM install react-router-dom in the terminal 
//we need to import Hashrouter from react router as well at the top of the component.
import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
//we imported Link above from our react-router-dom. the link component will allow us to add clickable links into the DOM so the user can navigate the appication. 
//we meed to render our router by importing our routes file below.
import routes from './routes.js'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div>
            <div className='link-wrap'>
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    )
  }
}

// we replaced the div elements to Lin with the same classname The Link component uses a to prop to determine which route to navigate to. for rhe home route, we will want to use / and for the about route, we will want to use /about.   
// NOTE. Link tags are not self closing.   
{/* // we added routes to the rend method above^^^ right below the nav element, remember that using {} allows us to excape from JSX and reference a variabnle. */ }