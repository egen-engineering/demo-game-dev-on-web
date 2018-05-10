class Ball {
  state = {
    x: 0,
    y: 0,
    ballRadius: 20,
    color: "#222",
    dx: 5,
    dy: 5
  };

  constructor(
    canvas,
    x = 50,
    y = 50,
    dx = 10,
    dy = 10,
    ballRadius = 25,
    color = "#222"
  ) {
    this.canvas = canvas;
    this.ctx = this.ctx = this.canvas.getContext("2d");

    this.state = {
      x,
      y,
      dx,
      dy,
      ballRadius,
      color
    };
  }

  draw = () => {
    const { x, y, dx, dy } = this.state;

    this.drawBall();
    this.detectCollision();

    this.state.x = x + dx;
    this.state.y = y + dy;
  };

  drawBall = () => {
    const { x, y, ballRadius, color } = this.state;

    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
  };

  detectCollision = () => {
    const { x, y, dx, dy, ballRadius } = this.state;
    if (x + dx > this.canvas.width - ballRadius || x + dx < ballRadius) {
      this.state.dx = -dx;
    }

    if (y + dy < ballRadius || y + dy + ballRadius > this.canvas.height) {
      this.state.dy = -dy;
    }
  };
}

export default Ball;
