import React, { Component } from "react";

class Pong extends Component {
  state = {};

  /* set up a game loop */
  componentDidMount() {
    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  /* the function that does the actual drawing on the canvas */
  draw = () => {
    /* draw here */

    requestAnimationFrame(this.draw);
  };

  render() {
    return (
      <canvas id="egen-pong" height="600" width="800">
        You're browser does not support HTML5 Canvas.
      </canvas>
    );
  }
}

export default Pong;
