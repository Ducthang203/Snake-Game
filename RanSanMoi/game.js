let snake, food;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   if(!snake.isDead){
      drawSnake();
   } else {
      newGame()
   }
}

function drawSnake() {
   // Cập nhật vị trí của rắn sau mỗi SNAKE_SPEED frame
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update(); // Cập nhật vị trí của rắn
   }
   
   food.show(); // Hiển thị thức ăn
   snake.show(); // Hiển thị rắn

   // Xử lý khi rắn ăn thức ăn
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood(); // Gọi hàm khi rắn ăn thức ăn
   }
}

function newGame() {
   snake = new Snake();
   food = new Food();
}

function eatFood() {
   snake.length++;
   food.newFood();
}

function keyPressed() {
   // Xử lý sự kiện khi phím được nhấn
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1; // Di chuyển lên khi phím mũi tên lên được nhấn, nhưng không được phép di chuyển ngược lại
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1; // Di chuyển xuống khi phím mũi tên xuống được nhấn, nhưng không được phép di chuyển ngược lại
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1; // Di chuyển sang trái khi phím mũi tên trái được nhấn, nhưng không được phép di chuyển ngược lại
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1; // Di chuyển sang phải khi phím mũi tên phải được nhấn, nhưng không được phép di chuyển ngược lại
   }
}

