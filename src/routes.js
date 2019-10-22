//importing dependencies below
// when importing ClassList, reference your preset (in today's) files to make sure that you are directing it to the correct file name.  We imported with the othr components, and we are going to make use of routing parameters. This will allow us to use a single component that can know what dataset to load by looking at the parameter. The math paramemter sill be MATH1010

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';

//using the export default stmt below to export a router. We need an exact route at / to load the Home component and a route at /about to load the About component. 
// when creating a ROUTE, your path must be in the same syntax. when creating an import 
// these are your route components. 
// **** we added and set up a new route that uses a path of /classlist/:class and uses a component of ClassList. the :class indicates a rote parament called class in the url 

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={ClassList} path="/classlist/:class" />
    </Switch>
)