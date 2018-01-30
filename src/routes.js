import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./component/App";
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import CoursesPage from "./component/course/CoursesPage";



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);