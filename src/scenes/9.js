import React, { Component } from "react";
import Ball from "../components/Ball";

class Pong extends Component {
  state = {};
  canvas = null;
  ctx = null;

  /* get canvas context to start drawing */
  componentDidMount() {
    this.canvas = document.getElementById("egen-pong");
    this.ctx = this.canvas.getContext("2d");
    this.ball = new Ball(this.canvas);

    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  /* the function that does the actual drawing on the canvas */
  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw();
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
