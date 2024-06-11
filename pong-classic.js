
let table_width = 800;
let table_height = 600;
let paddle_width = 10;
let paddle_height = 50;
let goal_line = 20;
let ball_size = 9;
let net_width = 4;
let net_height = 30;
let net_color = "gray";
let score_color = "green";
let ball_color = "green";
let paddle_color = "green";
let bounce_color = "greenyellow"

let Player = {
	new: function(side) {
		return {
			width: paddle_width,
			height: paddle_height,
			x: side === "left" ? goal_line : this.canvas.width - goal_line,
			y: (this.canvas.height / 2) - (paddle_height / 2),
			color: paddle_color,
			direction: 0,
			speed: 3,
			score: 0,
		};
	}
}

let Ball = {
	new: function(vx, vy) {
		return {
			width: ball_size,
			height: ball_size,
			x: (this.canvas.width / 2) - (ball_size / 2),
			y: (this.canvas.height / 2) - (ball_size / 2),
			color: ball_color,
			speed: 1,
			velocity_x: vx,
			velocity_y: vy,
		};
	},
}

let Game = {
	initialize: function() {
		this.canvas = document.getElementById("table");
		this.context = this.canvas.getContext("2d");
		this.canvas.width = table_width;
		this.canvas.height = table_height;

		this.player1 = Player.new.call(this, "left");
		this.player2 = Player.new.call(this, "right");
		this.ball = Ball.new.call(this, 2, 1);

		this.running = false;
		Pong.draw();
		Pong.listen();
	},

	draw: function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = net_color;
		for (let y = 25; y < this.canvas.height - 50; y += 100) {
			this.context.fillRect(
				(this.canvas.width / 2) - (net_width / 2),
				y,
				net_width,
				net_height,
			);
		}
		this.context.fillStyle = score_color;
		this.context.font = "42px Orbitron";
		this.context.fillText(
			this.player1.score,
			(this.canvas.width / 2) - 90,
			60,
		);
		this.context.fillText(
			this.player2.score,
			(this.canvas.width / 2) + 60,
			60,
		);

		this.context.fillStyle = this.player1.color;
		this.context.strokeStyle = "white";
		this.context.strokeRect(
			this.player1.x,
			this.player1.y,
			this.player1.width,
			this.player1.height
		);
		this.context.fillRect(
			this.player1.x,
			this.player1.y,
			this.player1.width,
			this.player1.height
		);

		this.context.fillStyle = this.player2.color;
		this.context.strokeStyle = "white";
		this.context.strokeRect(
			this.player2.x,
			this.player2.y,
			this.player2.width,
			this.player2.height
		);
		this.context.fillRect(
			this.player2.x,
			this.player2.y,
			this.player2.width,
			this.player2.height
		);
		for (let y = this.ball.y; y < this.ball.y + this.ball.height; y++) {
			if (y & 1) { this.context.fillStyle = bounce_color; }
			else { this.context.fillStyle = this.ball.color; }
			this.context.fillRect(this.ball.x, y, this.ball.width, 1);
		}
	},

	listen: function() {
		document.addEventListener("keydown", function(key) {
			if (Pong.running === false) {
				Pong.running = true;
				window.requestAnimationFrame(Pong.loop);
			}
			switch(key.code) {
				case "ArrowUp":
					Pong.player1.direction = -1;
					break;
				case "ArrowDown":
					Pong.player1.direction = 1;
					break;
				case "KeyW":
					Pong.player2.direction = -1;
					break;
				case "KeyS":
					Pong.player2.direction = 1;
					break;
				default:
					break;
			}
		});
		document.addEventListener("keyup", function(key) {
			if (key.code == "ArrowUp" || key.code == "ArrowDown") {
				Pong.player1.direction = 0;
			} else if (key.code == "KeyW" || key.code == "KeyS") {
				Pong.player2.direction = 0;
			}
		});
	},

	update: function() {
		if (this.player1.direction) {
			let move = this.player1.direction * this.player1.speed + this.player1.y;
			if (move >= 0 && move <= this.canvas.height - this.player1.height) {
				this.player1.y = move;
			}
		}
		if (this.player2.direction) {
			let move = this.player2.direction * this.player2.speed + this.player2.y;
			if (move >= 0 && move <= this.canvas.height - this.player2.height) {
				this.player2.y = move;
			}
		}

		this.ball.y += this.ball.velocity_y * this.ball.speed;
		if (this.ball.y < 0) {
			this.ball.y = 0;
			this.ball.velocity_y *= -1;
		} else if (this.ball.y + this.ball.height > this.canvas.height) {
			this.ball.y = this.canvas.height - this.ball.height;
			this.ball.velocity_y *= -1;
		} else if ((this.ball.y + this.ball.height === this.player1.y ||
			this.ball.y === this.player1.y + this.player1.height) &&
			this.ball.x <= this.player1.x + this.player1.width &&
			this.ball.x + this.ball.width >= this.player1.x) {
				this.ball.velocity_y *= -1;
		} else if ((this.ball.y + this.ball.height === this.player2.y ||
			this.ball.y === this.player2.y + this.player2.height) &&
			this.ball.x <= this.player2.x + this.player2.width &&
			this.ball.x + this.ball.width >= this.player2.x) {
				this.ball.velocity_y *= -1;
		}
		this.ball.x += this.ball.velocity_x * this.ball.speed;
		if (this.ball.x + this.ball.width > this.canvas.width) {
			this.player1.score++;
			// RESET
			this.ball.x = (this.canvas.width / 2) - (this.ball.width / 2);
			this.ball.speed = 1;
		} else if (this.ball.x < 0) {
			this.player2.score++;
			// RESET
			this.ball.x = (this.canvas.width / 2) - (this.ball.width / 2);
			this.ball.speed = 1;
		} else if (this.ball.x + this.ball.width >= this.player2.x &&
			this.ball.y + this.ball.height >= this.player2.y &&
			this.ball.y <= this.player2.y + this.player2.height) {
				this.ball.velocity_x *= -1;
				this.ball.speed += 0.1;
				this.player2.color = bounce_color;
				setTimeout(function() {Pong.player2.color = paddle_color}, 50);
		} else if (this.ball.x <= this.player1.x + this.player1.width &&
			this.ball.y + this.ball.height >= this.player1.y &&
			this.ball.y <= this.player1.y + this.player1.height) {
				this.ball.velocity_x *= -1;
				this.ball.speed += 0.1;
				this.player1.color = bounce_color;
				setTimeout(function() {Pong.player1.color = paddle_color}, 50);
		}
	},

	loop: function() {
		Pong.update();
		Pong.draw();
		requestAnimationFrame(Pong.loop);
	},
}

let Pong = Object.assign({}, Game);
Pong.initialize();
