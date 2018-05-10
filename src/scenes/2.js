import React, { Component } from "react";

class Pong extends Component {
  state = {};
  canvas = null;
  ctx = null;

  /* get canvas context to start drawing */
  componentDidMount() {
    this.canvas = document.getElementById("egen-pong");
    this.ctx = this.canvas.getContext("2d");

    this.setState({
      x: this.canvas.width / 2,
      y: this.canvas.height - 50,
      ballRadius: 25
    });

    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  drawBall = () => {
    const { x, y, ballRadius } = this.state;

    /* use context api to draw a ball */
    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#222";
    this.ctx.fill();
    this.ctx.closePath();
  };

  /* the function that does the actual drawing on the canvas */
  draw = () => {
    this.drawBall();
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
