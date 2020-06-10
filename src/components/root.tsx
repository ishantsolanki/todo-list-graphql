import React from "react";
import Helmet from "react-helmet";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/core";

import globalStyles from "@/global/styles";

import Example from "@/components/example";

const Root: React.FunctionComponent = () => (
  <div>
    <Global styles={globalStyles} />
    <Helmet>
      <title>Todo App</title>
    </Helmet>
    <Switch>
      <Route path="/" exact component={Example} />
    </Switch>
  </div>
);

export default hot(Root);
