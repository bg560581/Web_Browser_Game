// //create game area

let canvas = document.getElementById("gameArea");
    let ctx = canvas.getContext("2d");
    let x = canvas.width - 500;
    let y = canvas.height - 25;



    function drawPlayer() {
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        ctx.x = 0;
    }  
 const id = setInterval(()=> {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer()
        x += 1

        if (x > canvas.width + 11){
            clearInterval(id)
        }
        if (clearInterval() === 'true'){
        setInterval(id, 10)
        }
    }, 20);


//figure out a way to get the draw function in the re


let start = 0;

function animate(timestamp) { 
  const elapsed = timestamp - start;
  if (elapsed > 200) {
    start = timestamp;
    tick();
  }
  requestAnimationFrame(animate); 
}
let started = false

//need to pass id variable in animate function in order to get constant motion
if (!started){
    animate();
}
function animate(){
    draw();
    requestAnimationFrame(animate)
}



    // function drawPlayer2() {
    //     ctx.fillStyle = "#FF0000";
    //     ctx.fillRect(x, 10, 50, 50);
    // }
    // function draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     drawPlayer();
    //     // drawPlayer2();
    //     x -= dx;
    // }
    // function draw2(){
    //     ctx.clearRect(0,0, canvas.width, canvas.height)
    //     drawPlayer2();
    //     x += dx;
    // }
    // setInterval(draw2, .5)
    // draw()
    // setInterval(draw, 10)
    // draw2()


      
    




    // if (x = 500){
    //         path == true
    // }


    // while (true){
    // setInterval(draw, 0.25)
// } 
    // setInterval(draw, 0.25)

    
    // var motion = true
    //     setInterval(
    //         function (){
    //             console.log(motion)
    //         if (motion){
    //             draw
    //         }else{
    //             return
    //         }                
    //          .05)
        // setTimeout(
        //     setInterval(draw2, .05))
    
    // const tree = new Image();
    // tree.src = 'tree.png'
    // tree.onload = function(){
    //     ctx.drawImage(tree, 50, 100)
    // }
    
    
        
    // class picture {
    //     constructor(x, y, dx, dy) {
    //         this.x = x;
    //         this.y = y;
    //         this.dx = dx
    //         this.dy = dy
    //     }
    //     drawCharacter(player) {
    //         player.onload = function() {
    //             ctx.drawImage(player, 50, 100);
    //             console.log(player)
    //         };
    //     }
    //     drawEnemy(enemy){
    //         enemy.onload = function(){
    //             ctx.drawImage(enemy, 300, 175)
    //             console.log(enemy)
    //         };
    //     }
    
    // }
    

// function startGame() {
//     arena.start();
// }



// var pic = new picture('','')
// pic.drawCharacter(player)


// let objectsImg = ['boulder.png', 'sword.png', 'staff.png']
// for (let i = 0; i < objectsImg.length; i++){
//         const rock = new Image();
//         rock.src = objectsImg[i]
//             let x = getRandomInt(0,500);
//             let y = getRandomInt(0,300);
//             console.log(x)
//             console.log(y)
            
//             const enemy = new picture(x,y)
//             enemy.drawEnemy(rock)
            
//         }
        
        
//         function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// drawPlayer()
