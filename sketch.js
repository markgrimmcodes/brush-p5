function setup() {
  createCanvas(400, 400);
  background("white");
  noStroke();
}
function draw() {
  if (mouseIsPressed) {
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
    let x = mouseX + random(-20, 20);
    let y = mouseY + random(-20, 20);
    circle(x, y, random(10, 30));
  }
}
