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
    this.balls = [
      new Ball(this.canvas),
      new Ball(this.canvas, 50, 50, 30, -10, 25, "blue"),
      new Ball(this.canvas, 50, 50, 15, -10, 25, "red"),
      new Ball(this.canvas, 50, 50, -10, -15, 25, "green"),
      new Ball(this.canvas, 50, 50, -30, 40, 25, "yellow"),
      new Ball(this.canvas, 50, 50, 20, -10, 25, "purple"),
      new Ball(this.canvas, 50, 50, 30, -20, 25, "orange"),
      new Ball(this.canvas, 50, 50, 20, -20, 25, "violet")
    ];

    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  /* the function that does the actual drawing on the canvas */
  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => ball.draw());
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
