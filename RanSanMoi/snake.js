class Snake {
   constructor() {
      this.vel = createVector(0, 0);
      this.head = createVector(0, 0);
      this.length = 0;
      this.body = [];
      this.isDead = false;
   }
   update() {
      this.body.push(createVector(this.head.x, this.head.y));

      this.head.x += this.vel.x * GRID_SIZE;
      this.head.y += this.vel.y * GRID_SIZE;

      this.head.x = (this.head.x + WITDH) % WITDH;
      this.head.y = (this.head.y + HEIGHT) % HEIGHT;

      if (this.length < this.body.length) {
         this.body.shift();
      }

      for (let vector of this.body) {
         if (vector.x == this.head.x && vector.y == this.head.y) {
            this.isDead = true;
         }
      }

   }
   show() {
      noStroke();
      // Vẽ đầu rắn với màu vàng
      image(snakeHead, this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);
         
      for (let vector of this.body) {
         image(snakeBody, vector.x, vector.y, GRID_SIZE, GRID_SIZE);
      }
   }
}