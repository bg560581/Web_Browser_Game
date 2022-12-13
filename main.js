// //create game area


function startGame() {
    arena.start();
}
const arena = document.getElementById('gameArea')
const ctx = arena.getContext('2d')
const player = new Image();
player.src = 'tree.png'

class picture {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    drawCharacter(player) {
        player.onload = function() {
            ctx.drawImage(player, 15,130);
            player.style.width = '50px'
            console.log(player)
        };
    }
    drawEnemy(img){
        img.onload = function(){
            ctx.drawImage(img, this.x, this.y)
        }
    }
}

let objectsImg = ['boulder.png', 'sword.png', 'staff.png']
for (let i = 0; i < objectsImg.length; i++){
        const img = new Image();
            img.src = objectsImg[i]
            let x = getRandomInt(0,500);
            let y = getRandomInt(0,300);
            // let x = getRandonArbitrary(0, 500)
            // let y = getRandonArbitrary(0, 300)
            console.log(x)
            console.log(y)
            

        const pic = new picture(x, y)
            pic.drawCharacter(player)

        const enemy = new picture(x,y)
            enemy.drawEnemy(img)
            
}


function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


// const arena = document.getElementById('gameArea')
// const ctx = arena.getContext('2d')




//function myMove() {
  //let id = null;
  //const elem = document.getElementById("animate");   
  //let pos = 0;
  //clearInterval(id);
  //id = setInterval(frame, .50);
  //function frame() {
   // if (pos == 3500) {
   //   clearInterval(id);
  //  } else {
  //    pos++; 
  //    elem.style.left = pos + "px"; 
//    }
//  }
//}













// // create image and have it placed middle-left side of frame
//         //start with image in top left corner
// //  function draw() {
// //           const canvas = document.getElementById("box");
// //           if (canvas.getContext) {
// //             const ctx = canvas.getContext("2d");            
// //           }
// // }  

// //first start with gravity of player
//     // create movement of player
//         //use button to make image jump
//         //use gravity to drop image 

// //make another image that that will eventually move from right side of box to left 
