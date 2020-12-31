var snake;
var size = 10;
var food;
var height;
var width;
var ground;

function preload(){
    
}

function setup(){
    createCanvas(800,800);

    //ground = width/size;
    //ground = height/size;
    frameRate(5);  
    snake = new Snake();
    food = new Food();
    
    food = createVector();
    food.location();
}

function draw(){
    background(55);  
    scale(size);

    if(snake.eat(food)) {
        foodLocation();
    }

    snake.update();
    snake.display();

    noStroke();
    fill(255);
    rect(food.x, food.y, 1, 1);
    //snake.eat(food);

    food.location();

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);

    if(snake.endGame()) {
        Text("GAME OVER");
    }
}   

function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        snake.setDirection(-1, 0);
    } else if(keyCode === RIGHT_ARROW) {
        snake.setDirection(1, 0);
    } else if(keyCode === UP_ARROW) {
        snake.setDirection(0, -1);
    } else if(DOWN_ARROW) {
        snake.setDirection(0, 1);
    }
}

