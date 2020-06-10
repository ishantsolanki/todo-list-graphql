import React from "react";

interface IIndexState {
  dynamic: React.SFC | null;
}

class Index extends React.PureComponent<{}, IIndexState> {
  public render() {
    return <h1>Todo List</h1>;
  }
}

export default Index;
