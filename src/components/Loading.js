import React, { Component } from "react";

class LoadingSpinner extends Component {
  state = {};
  render() {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" />
      </div>
    );
  }
}

export default LoadingSpinner;
