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
      ballRadius: 25,
      dx: 5,
      dy: -5,

      paddleHeight: 30,
      paddleWidth: 200,
      paddleX: this.canvas.width / 2 - 100,

      rightPressed: false,
      leftPressed: false
    });

    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
    requestAnimationFrame(this.draw);
  }

  /* stop callback loop when leaving page */
  componentWillUnmount() {
    this.draw = () => {};
  }

  keyDownHandler = event => {
    if (event.keyCode === 39) {
      this.setState({ rightPressed: true });
    } else if (event.keyCode === 37) {
      this.setState({ leftPressed: true });
    }
  };

  keyUpHandler = event => {
    if (event.keyCode === 39) {
      this.setState({ rightPressed: false });
    } else if (event.keyCode === 37) {
      this.setState({ leftPressed: false });
    }
  };

  drawBall = () => {
    const { x, y, ballRadius, danger } = this.state;

    /* use context api to draw a ball */
    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = danger ? "red" : "#222";
    this.ctx.fill();
    this.ctx.closePath();
  };

  drawPaddle = () => {
    const { paddleX, paddleHeight, paddleWidth } = this.state;
    this.ctx.beginPath();
    this.ctx.rect(
      paddleX,
      this.canvas.height - paddleHeight,
      paddleWidth,
      paddleHeight
    );

    this.ctx.fillStyle = "#222";
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
    const { rightPressed, leftPressed, paddleX, paddleWidth } = this.state;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.drawPaddle();
    this.detectCollision();

    /* increment dx and dy to make it move */
    this.setState(prevState => ({
      x: prevState.x + prevState.dx,
      y: prevState.y + prevState.dy
    }));

    if (rightPressed && paddleX + paddleWidth < this.canvas.width) {
      this.setState(prevState => ({ paddleX: prevState.paddleX + 10 }));
    }

    if (leftPressed && paddleX > 0) {
      this.setState(prevState => ({ paddleX: prevState.paddleX - 10 }));
    }

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
