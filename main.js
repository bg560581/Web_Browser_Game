let canvas;
let context;

window.onload = init;

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    createWorld()

    window.requestAnimationFrame(gameLoop);
}

        

class GameCharacters{
    constructor(context, x, y, vx, vy, width, height){
        this.context = context
        this.x = x 
        this.y = y
        this.vx = vx
        this.vy = vy
        this.width = width
        this.height = height
        this.goal = false
        this.player1 = false

        this.isColliding = false
    }
}
class Square extends GameCharacters {
    constructor (context, x, y, vx, vy, width, height){
        super(context, x, y, vx, vy, width, height);
    }
    draw(){
        this.context.fillStyle = this.isColliding?'#ff8080':'#0099b0';
        this.context.fillRect(this.x, this.y, this.width, this.height);

    }

    update(secondsPassed){
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}






function gameLoop(timeStamp){
    secondsPassed = (timeStamp - oldTimeStamp) / 2000;
    oldTimeStamp = timeStamp;

    for (let i = 0; i < gameObjects.length; i++){
        gameObjects[i].update(secondsPassed)
    }
    
    let gameResult = detectCollision()
    context.clearRect(0, 0, canvas.width, canvas.height); 
    
    if (ball.x > canvasWidth){
        ball.y = player1.y;
        ball.x = player1.x;
        ball.vx = 0;

    }
    for (let i = 0; i < gameObjects.length; i++){
        gameObjects[i].draw();
    }
    

    if (gameResult == false){
        window.requestAnimationFrame(gameLoop)
    } else {
        window.requestAnimationFrame(gameLoop)

    }
}


function detectCollision(){
let obj2;
let hitGoal = false
    for (let i = 0; i < gameObjects.length; i++){
        gameObjects[i].isColliding = false;
    }
        
        for (let j = 1 ; j < gameObjects.length; j++)
        {
            obj2 = gameObjects[j];

            if (rectIntersect(ball.x, ball.y, ball.width, ball.height, obj2.x, obj2.y, obj2.width, obj2.height)) {
                ball.isColliding = true;
                obj2.isColliding = true;
                if (obj2.goal == true){
                    hitGoal = true
                    alert("goal!")
                } else if(obj2.player1 == false){
                    alert("YOU LOSE!")
                }                
            }
        }
        return hitGoal
    }

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}



function movePlayer(e) {
    if (e.key == "up" || e.key == "ArrowUp") {
        player1.y -= 5
        ball.y -= 5
    }
    else if (e.key == "down" || e.key == "ArrowDown") {
        player1.y += 5;
        ball.y += 5
    }
    player1.draw()
}
function shootBall(e){
    if (e.key == ' ' || e.code == 'Space'
    ){
        ball.vx = 500
    }
}