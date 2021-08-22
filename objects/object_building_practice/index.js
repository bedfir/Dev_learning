// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//Create constructor ball model
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}


//--------------All methodes
//Create methode to the Ball()s prototype
//draw methode
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

//Create a new ball instance
/* let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
testBall.x
testBall.size
testBall.color
testBall.draw() */

//Add update() methode to the ball prototype
//check whether the ball has reached the edge of the canvas
Ball.prototype.update = function () {
    //if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    //if the x coordinate is smaller than 0 (the ball is going off the left edge).
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    // if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    // if the y coordinate is smaller than 0 (the ball is going off the top edge).
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    // add the velX value to the x coordinate, and the velY value to the y coordinate
    this.x += this.velX;
    this.y += this.velY;
}

//Adding collision detection
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}



//-------------Animating the ball
let balls = [];
//creates a new instance of our Ball()
while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size
    );

    balls.push(ball);
}

//update the information in the program and then render the resulting view on each frame of the animation
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        
    }

    //the function is calling itself every time it runs, so it runs over and over again.
    requestAnimationFrame(loop);
}

loop();