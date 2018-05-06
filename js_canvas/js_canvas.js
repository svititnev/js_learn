// canvas
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
ctx.strokeStyle = 'rgb(7, 19, 131)';
ctx.fillStyle = 'rgb(56, 135, 49)';

// shadow
function testShadow() {
  ctx.shadowOffsetX = 6;
  ctx.shadowOffsetY = 6;
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'rgb(7, 99, 8)';
  ctx.font = '20pt Verdana';
  ctx.fillText("Two: I and my Shadow", 100, 30);
}

// translate:
function testTranslate() {
  ctx.save();
  ctx.translate(100, 100);
  ctx.fillRect(0, 0, 50, 50);
  ctx.translate(100, 100);
  ctx.fillRect(0, 0, 50, 50);
  ctx.restore();
  ctx.fillRect(0, 0, 50, 50);
}

// rotate
function testRotate() {
  ctx.translate(100, 100);
  ctx.rotate(Math.PI / 4);
  ctx.strokeRect(0, 0, 100, 100);
}

// scale
function testScale() {
  ctx.strokeRect(0, 0, 100, 100);
  ctx.scale(2, 2);
  ctx.strokeRect(0, 0, 100, 100);
  ctx.scale(0.25, 0.25);
  ctx.strokeRect(0, 0, 100, 100);
}

// composition
function testComposition() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 50, 400, 200);
  ctx.fillStyle = 'red';
  ctx.globalCompositeOperation = 'xor';
  ctx.fillRect(100, 0, 200, 300);
}

function testClip() {
  ctx.beginPath();
  ctx.moveTo(100, 150);
  ctx.lineTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.closePath();
  ctx.clip();
  ctx.fillRect(0, 0, 400, 400);
}

function testImageData() {
  let rectSize = 300;
  ctx.fillStyle = 'rgb(237, 13, 13)';
  ctx.fillRect(0, 0, rectSize, rectSize / 4);
  ctx.fillStyle = 'rgb(8, 106, 53)';
  ctx.fillRect(0, 1 * rectSize / 4, rectSize, rectSize / 4);
  ctx.fillStyle = 'rgb(17, 28, 177)';
  ctx.fillRect(0, 2 * rectSize / 4, rectSize, rectSize / 4);
  ctx.fillStyle = 'rgb(235, 240, 0)';
  ctx.fillRect(0, 3 * rectSize / 4, rectSize, rectSize / 4);
  let imgDataSample = ctx.getImageData(0, 0, rectSize, rectSize);
  let imgDataEmpty = ctx.createImageData(rectSize, rectSize);
  for (let i = 0; i < rectSize; i++) {
    for (let j = 0; j < rectSize; j++) {
      let pixNumber = i * rectSize + j;
      let dataNumber = pixNumber * 4;
      imgDataEmpty.data[dataNumber + 0] = myRandom(255);
      imgDataEmpty.data[dataNumber + 1] = myRandom(255);
      imgDataEmpty.data[dataNumber + 2] = myRandom(255);
      imgDataEmpty.data[dataNumber + 3] = myRandom(255);
    }
  }
  ctx.putImageData(imgDataEmpty, rectSize + 10, 0);
  ctx.putImageData(imgDataSample, 2 * rectSize + 20, 0);
}

function myRandom(max) {
  return Math.round(Math.random() * max);
}

testImageData();
