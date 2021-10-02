import React from "react";
import { Route, Switch } from "react-router";
import Blog from "../components/Blog/Blog";
import Post from "../components/Post/Post";

export default function Body() {
  return (
    <Switch>
      <Route path="/home" exact component={Blog} />
      <Route path="/post/:blogId" component={Post} />
    </Switch>
  );
}
