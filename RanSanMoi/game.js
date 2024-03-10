let snake, food, speed;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}

function draw() {
   background(backgroundImage);
   if (!snake.isDead) {
      drawSnake();
   } else {
      SNAKE_SPEED = 10;
      newGame()
      updateSpeed(0) //update ui 
      updatePoints(0)
      const dieSound = document.getElementById("dieSound");
      dieSound.play();
   }
}

function drawSnake() {
   // Cập nhật vị trí của rắn sau mỗi SNAKE_SPEED frame
   if (frameCount % SNAKE_SPEED == 0) {
      snake.update(); // Cập nhật vị trí của rắn
   }

   food.show(); // Hiển thị thức ăn
   snake.show(); // Hiển thị rắn

   // Xử lý khi rắn ăn thức ăn
   if (snake.head.x == food.x && snake.head.y == food.y) {
      eatFood(); // Gọi hàm khi rắn ăn thức ăn
   }
}

function updatePoints(points) {
   document.getElementById("points").textContent = points;
}
function updateSpeed(points) {
   document.getElementById("speed").textContent = points / 5;
}

function newGame() {
   snake = new Snake();
   food = new Food();
}

function eatFood() {
   snake.length++;
   updatePoints(snake.length);
   updateSpeed(snake.length);
   food.newFood();
   const eatSound = document.getElementById("eatSound");
   eatSound.play();
   if (snake.length % 5 == 0) {
      SNAKE_SPEED = SNAKE_SPEED - 1
   };
}
function preload() {
   backgroundImage = loadImage("images/bg.png"); 
   snakeHead = loadImage("images/snake.svg");
   snakeBody = loadImage("images/snakeBody.svg");
   foodBG = loadImage("images/food.png");// Load your image
}

function keyPressed() {
   // Xử lý sự kiện khi phím được nhấn
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1; // Di chuyển lên khi phím mũi tên lên được nhấn, nhưng không được phép di chuyển ngược lại
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1; // Di chuyển xuống khi phím mũi tên xuống được nhấn, nhưng không được phép di chuyển ngược lại
      snake.vel.x = 0;
   } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1; // Di chuyển sang trái khi phím mũi tên trái được nhấn, nhưng không được phép di chuyển ngược lại
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1; // Di chuyển sang phải khi phím mũi tên phải được nhấn, nhưng không được phép di chuyển ngược lại
   } else if (keyCode == 81 && snake.vel.x != -1) {
      if (SNAKE_SPEED > 0) {
         SNAKE_SPEED = SNAKE_SPEED + 1
      }
      updateSpeed(SNAKE_SPEED - 1);//update UI
   }
}

