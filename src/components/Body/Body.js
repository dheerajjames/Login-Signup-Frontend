import React from "react";
import { Route, Switch } from "react-router";
import Blog from "../Blog/Blog";
import Post from "../Post/Post";

export default function Body() {
  return (
    <Switch>
      <Route path="/home" exact component={Blog} />
      <Route path="/post/:blogId" component={Post} />
    </Switch>
  );
}
