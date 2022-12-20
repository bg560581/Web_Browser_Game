document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "up" || e.key == "ArrowUp") {
        rightPressed = true;
    }
    else if (e.key == "down" || e.key == "ArrowDown") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "up" || e.key == "ArrowUp") {
        rightPressed = false;
    }
    else if (e.key == "down" || e.key == "ArrowDown") {
        leftPressed = false;
    }
}

function collisionDetection() {
    if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
    }
}

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            if (y = y - paddleHeight) {
                dy = -dy;
            }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

var interval = setInterval(draw, 10);





// document.addEventListener("EnterFrame", function () {
//     let circle = drawCircle
//     let rect = rect()
//   if (
//     circle.x < rect.x + 25 &&
//     circle.x + circle.w > rect.x &&
//     circle.y < rect.y + rect.h &&
//     circle.h + circle.y > rect.y
//   ) {
//     // Collision detected!
//     this.color("green");
//     alert('collision has occured')
//   } else {
//     // No collision
//     this.color("blue");
//   }
// });


// function collisionDetection() {
//     let a = circle;
//     let b = rect()
//     if (x > a.x && x < b.x && y > a.y && y < b.y) {
//         alert('Goal!')
//     }
//     console.log(collisionDetection)  
// }

// collisionDetection()

// function collisionDetection(){
//     let circle = drawCircle();
//     let rect = rect();
//     return !(
//     ((a.y + a.height) < (b.y)) ||
//     (a.y > (b.y + b.height)) ||
//     ((a.x + a.width) < b.x) ||
//     (a.x > (b.x + b.width))
//     );
// }

// if (collisionDetection == true){
//     alert('goal!')
// }






// // let collision = false

// // function detectCollision(circle, rect) {
// //     let x = 0
// //     if ((circle.x <= rect.x + rect.width) && (circle.x + circle.width >=  rect.x) && (circle.y <= rect.y + rect.height) && (circle.y + circle.height >= rect.y)) {
// //         collision = true
// //       return alert("Collision detected");
// //     }
// //   }


// // //create game area
// // let x = canvas.width - 500;
// // let y = canvas.height - 25;
// // let dx = -5


// // function drawCircle() {
// //     ctx.beginPath();
// //     ctx.arc(x, y, 15, 0, Math.PI*2);
// //     // ctx.fillStyle = "#0095DD";
// //     ctx.fill();
// //     ctx.closePath();
// //     ctx.x = 0;
// // }
// // const circle = setInterval(() => {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height); 
// //     drawCircle()
// //     rect()    
// //     x -= dx
// //     if (x >= canvas.width + 11) {
// //         clearInterval(circle);
// //     }
    
// // }, 20)

// // function rect(){
// //     ctx.fillRect(475, 250, 25, 75);
// //     // ctx.fillStyle = "#0095DD";
    
// }