// //create game area

let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
let x = canvas.width - 500;
let y = canvas.height - 25;
let dx = -1


function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.x = 0;
}

const circle = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawCircle()
    rect()    
    x -= dx
    if (x >= canvas.width + 11) {
        clearInterval(circle);
    }
}, 20)


let rect = function rect(){
    ctx.fillRect(475, 250, 25, 75);
}
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


function detectCollision(circle, rect) {
    if ((x > circle.width && y > circle.width) || (x > rect.width && x > rect.height)) {
      alert("Collision detected");
    }
  }
  

