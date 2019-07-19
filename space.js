


let ship = {
    name:"E.T", 
    color: "20, 30, 255", 
    shipX: 500,
    shipY: 525
    
};

let bullet = {
    name: "Bullet",
    color: "50, 50, 50",
    startingBulletX: ship.shipX,
    startingBulletY: ship.shipY
    
}

let player = Object.create(ship)
function setup(){
createCanvas(1263, 590)


    
}   
let alien = {
    alienX: 50, 
    alienY: 50,
    alienradius: 30
}
    

let enemy = Object.create(alien)


function draw(){
    background(70, 75, 82)
    rect(player.shipX, player.shipY, 115, 40), fill(20, 30, 30)
    // ellipse(550, 200, 20); fill(70, 75, 82);
    enemy.alienX += 1;
    ellipse(enemy.alienX, enemy.alienY, enemy.alienradius, enemy.alienradius)
    if (keyIsDown(LEFT_ARROW) && player.shipX >= 0) {
        player.shipX -= 8
    }
    
    if (keyIsDown(RIGHT_ARROW) && player.shipX <= 1263 - 115) {
        player.shipX += 8
    }
function createBullet(){
    let shot = object.create(bullet)
    for(let i = 0; i < 8; i++)
    rect(shot.startingBulletX, shot.startingBulletY + (i * 200), 10, 10)
}
function moveBullet() {
    let shot = Object.create(bullet);
    shot.bulletY -= 20;
    if(shot.bulletY <= 0) {
    shot.bulletY = player.shipY;
    shot.bulletX = player.shipX;
}

    
}
}


