import React from "react";
import "./Err.css";

import image from "../../src/404.jpg";

class Error extends React.Component {
  render() {
    return (
      <>
        <img src={image} alt="404 ERROR" />
      </>
    );
  }
}

export default Error;
