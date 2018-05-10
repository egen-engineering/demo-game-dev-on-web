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
      danger: false,
      x: this.canvas.width / 2,
      y: this.canvas.height - 50,
      ballRadius: 25,
      dx: 5,
      dy: -5
    });

    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  drawBall = () => {
    const { x, y, ballRadius, danger } = this.state;

    /* use context api to draw a ball */
    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = danger ? "red" : "#222";
    this.ctx.fill();
    this.ctx.closePath();
  };

  detectCollision = () => {
    const { x, y, dx, dy, ballRadius } = this.state;
    if (x + dx > this.canvas.width - ballRadius || x + dx < ballRadius) {
      this.setState(prevState => ({ dx: -prevState.dx }));
    }

    if (y + dy < ballRadius || y + dy + ballRadius > this.canvas.height) {
      this.setState(prevState => ({ dy: -prevState.dy }));
    } else {
    }

    if (y + dy + ballRadius > this.canvas.height) {
      this.setState({ danger: true }, () => {
        setTimeout(() => {
          this.setState({ danger: false });
        }, 200);
      });
    }
  };

  /* the function that does the actual drawing on the canvas */
  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.detectCollision();

    /* increment dx and dy to make it move */
    this.setState(prevState => ({
      x: prevState.x + prevState.dx,
      y: prevState.y + prevState.dy
    }));

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
