function setup() {
  createCanvas(400, 400);
  background("white");
  noStroke();
}
function draw() {
  if (mouseIsPressed) {
    fireBrush(mouseX, mouseY);
  }
}
function fireBrush(x, y) {
  x = x + random(-20, 20);
  y = y + random(-20, 20);

  let diameter = random(10, 30);
  let green = 0;
  let opacity = 100;

  if (diameter < 20) {
    opacity = random(10, 40);
  } else {
    green = random(100, 200);
    opacity = random(40, 70);
  }
  fill(random(200, 255), green, 0, opacity);

  circle(x, y, random(10, 30));
}
