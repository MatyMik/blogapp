import React, { Component,Fragment } from 'react';
import {Switch, Route, withRouter} from "react-router-dom"

import './App.css';
import Auth from "./containers/Auth/Auth"
import Navigation from "./containers/Navigation/Navigation"
import Posts from "./containers/Posts/Posts";
import PostEditor from "./containers/PostEditor/PostEditor";
import errorHandler from "./containers/ErrorHandler/ErrorHandler";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation/>
        <Switch>
          <Route path ="/auth/:page" component={Auth}/>         
          <Route path ="/addnewpost" component={PostEditor}/>
          <Route exact path ="/post/:postId" component={PostEditor}/>
          <Route path ="/post" component={Posts}/>
        </Switch>
      </Fragment>
    );
  }
}

export default errorHandler(withRouter(App));
