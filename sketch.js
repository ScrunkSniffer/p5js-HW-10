function setup() {
  createCanvas(500, 500, WEBGL);
  }
  function draw() {
  background(60,50,180);
  fill(225)
  circle(100, -150, 125);
  fill(30)
  quad(0, 0, -200, -130, -250, 250, 250, 250);
  fill(0)
  quad(0, 0, -200, -130, 250, 250, 250, -170);
  fill(25)
  quad(0, 0, -200, -130, 250, 250, 150, -170);
  triangle(-275, 250, -250, -150, -100, 250);
  fill(100,125,150)
  quad(250, 130, -250, 130, -250, 250, 250, 250);
  fill(25,25,0)
  quad(-225, -100, -150, -100, -150, 250, -225, 250);
  quad(225, 50, 50, 50, 50, 175, 225, 175);
  fill(35,25,0)
  quad(220, -30, 50, -30, 20, 50, 250, 50);
  fill(45,45,0)
  quad(200, -60, 200, -30, 215, -30, 215, -60);
  fill(45,0,0)
  quad(75, -60, 75, -30, 50, -30, 50, -60);
  fill(25,50,0)
  triangle(-275, 100, -187, -250, -100, 100);

  push();
  fill(250,250,0)
  translate(176.7, 183.3);
  rotateY(frameCount * 0.01);
  triangle(3, -33, -26, 16, 23, 16);
  pop();

  push();
  fill(275,250,25)
  translate(176, 183);
  rotateY(frameCount * 3);
  triangle(3, -33, -26, 16, 23, 16);
  pop();

  push();
  fill(275,250,25)
  translate(176, 183);
  rotateY(frameCount * 2);
  triangle(3, -33, -26, 16, 23, 16);
  pop();
    
  push();
  fill(200,100,25)
  translate(176, 183);
  rotateY(frameCount * 0.01 - 0.5);
  rotateX(frameCount * 0.01 - 1);
  triangle(3, -33, -26, 16, 23, 16);
  pop();

  push();
  translate(mouseX - width / 2, mouseY - height / 2);
  fill(100,0,0)
  triangle(-20, -20, 20, -20, 0, 20);
  triangle(-20, -20, -20, -0, 0, 20);
  triangle(0, 20, 20, -20, 50, -30);
  circle(-25,-25,25)
  pop()
  }