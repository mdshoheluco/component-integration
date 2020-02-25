import React from "react";

const App = props => {
  return (
    <React.Fragment>
      Hello {props.firstName} {props.lastName}
    </React.Fragment>
  );
};

export default App;
