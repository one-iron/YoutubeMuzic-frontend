import React, { Component } from "react";

export default class ThreeDots extends Component {
  render() {
    return (
      <svg fill="white" width="30" height="30" cursor="pointer">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    );
  }
}
