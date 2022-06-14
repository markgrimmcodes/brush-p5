let bgColor = "white";
let currentBrush = "";

function setup() {
  createCanvas(400, 400);
  background(bgColor);
  noStroke();
}
function draw() {
  switch (key) {
    case "f":
      currentBrush = "fire";
      break;
    case "i":
      currentBrush = "ice";
      break;
    default:
      currentBrush = "";
  }

  if (mouseIsPressed) {
    if (currentBrush === "fire") {
      fireBrush(mouseX, mouseY);
    } else if (currentBrush === "ice") {
      iceBrush(mouseX, mouseY);
    } else {
      eraserBrush(mouseX, mouseY);
    }
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
function iceBrush(x, y) {
  let opacity = random(0, 100);
  x = x + random(-10, 10);
  y = y + random(-10, 10);
  let blue = random(200, 255);

  let bigRectHeight = random(30, 40);
  let bigRectWidth = random(30, 40);

  let smallRectHeight = random(10, 20);
  let smallRectWidth = random(10, 20);

  rect(mouseX, mouseY, bigRectHeight, bigRectWidth);
  rect(x, y, smallRectHeight, smallRectWidth);

  fill(0, 0, blue, opacity);
}
function eraserBrush(x, y) {
  fill(bgColor);
  circle(x, y, 50);
}
