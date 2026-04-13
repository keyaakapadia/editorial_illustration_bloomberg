let shapes = [];
let counter = 0;
let maxSize = 240;
let minSize = 120;
let shapeImgs = []; // array of PNGs
let bgImg; // background PNG

function preload() {
  // load background PNG
  bgImg = loadImage("Asset 30.png");

  // load shape PNGs
  shapeImgs.push(loadImage("Asset 12.png"));
  shapeImgs.push(loadImage("Asset 13.png"));
  shapeImgs.push(loadImage("Asset 14.png"));
  shapeImgs.push(loadImage("Asset 15.png"));
  shapeImgs.push(loadImage("Asset 16.png"));

  shapeImgs.push(loadImage("Asset 17.png"));
  shapeImgs.push(loadImage("Asset 18.png"));
  shapeImgs.push(loadImage("Asset 19.png"));
  shapeImgs.push(loadImage("Asset 20.png"));

  shapeImgs.push(loadImage("Asset 21.png"));
  shapeImgs.push(loadImage("Asset 22.png"));
  shapeImgs.push(loadImage("Asset 23.png"));
  shapeImgs.push(loadImage("Asset 24.png"));

  shapeImgs.push(loadImage("Asset 25.png"));
  shapeImgs.push(loadImage("Asset 26.png"));
  shapeImgs.push(loadImage("Asset 27.png"));
  shapeImgs.push(loadImage("Asset 28.png"));

  shapeImgs.push(loadImage("Asset 31.png"));
  shapeImgs.push(loadImage("Asset 32.png"));
  shapeImgs.push(loadImage("Asset 33.png"));
  shapeImgs.push(loadImage("Asset 34.png"));

}

function setup() {
  createCanvas(2048, 2048).parent("canvas-container");
  imageMode(CENTER);
}

function draw() {
  background(0); // black background

  // --- draw background image at fixed scale, centered ---
  let scaleFactor = 0.3; // adjust to resize bg
  let targetW = bgImg.width * scaleFactor;
  let targetH = bgImg.height * scaleFactor;

  image(bgImg, width / 2, height / 2, targetW, targetH);

  // --- draw all shapes ---
  for (let s of shapes) {
    push();
    translate(s.x, s.y);
    rotate(s.rotation);
    image(s.img, 0, 0, s.w, s.h); // preserve aspect ratio
    pop();
  }
}

function mouseMoved() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let baseSize = random(minSize, maxSize);
    let rotation = random(TWO_PI);
    let imgChoice = random(shapeImgs);

    // preserve aspect ratio
    let aspect = imgChoice.width / imgChoice.height;
    let drawW, drawH;

    if (aspect > 1) {
      // wider than tall → width = baseSize
      drawW = baseSize;
      drawH = baseSize / aspect;
    } else {
      // taller than wide → height = baseSize
      drawH = baseSize;
      drawW = baseSize * aspect;
    }

    let newShape = {
      x: mouseX,
      y: mouseY,
      w: drawW,
      h: drawH,
      rotation: rotation,
      img: imgChoice
    };

    if (counter % 8 === 0) {
      shapes.push(newShape);
    }
    counter++;
  }
}
