let image = null;
let canvas;
let grayImage = null;
let redImage = null;
let blurImage = null;
let rainbowImage = null;

function loadImage() {
  let file = document.getElementById("file");
  image = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  blurImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  canvas = document.getElementById("can");
  image.drawTo(canvas);
  alert("you loaded image");
}

function filterGray() {
  for (let pixel of grayImage.values()) {
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  canvas = document.getElementById("can");
  grayImage.drawTo(canvas);
}

function makeGray() {
  if (grayImage) {
    filterGray();
    grayImage.drawTo(canvas);
  }
  alert("you make image more gray");
}

function filterRed() {
  for (let pixel of redImage.values()) {
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setGreen(0);
      pixel.setRed(avg * 2);
      pixel.setBlue(0);
    } else {
      pixel.setGreen(avg * 2 - 255);
      pixel.setRed(255);
      pixel.setBlue(avg * 2 - 255);
    }
  }
}

function makeRed() {
  if (redImage) {
    filterRed();
    redImage.drawTo(canvas);
  }
  alert("you make image more red");
}

function filterBlur() {
  let output = blurImage;
  for (var pixel of blurImage.values()) {
    let x = pixel.getX();
    let y = pixel.getY();
    let randomXY = Math.round(Math.floor(Math.random() * 10));
    let newX = x + randomXY;
    if (newX < image.getWidth() && newX > 0) {
      if (Math.random() < 0.5) {
        let newPixel = image.getPixel(newX, y);
        output.setPixel(x, y, newPixel);
      } else {
        output.setPixel(x, y, pixel);
      }
    }
  }
  output.drawTo(canvas);
}

function makeBlur() {
  if (blurImage) {
    filterBlur();
    blurImage.drawTo(canvas);
  }
  alert("you make image blur");
}

function filterRainbow() {
  let height = rainbowImage.getHeight();
  for (let pixel of rainbowImage.values()) {
    let y = pixel.getY();
    let red = pixel.getRed();
    let green = pixel.getGreen();
    let blue = pixel.getBlue();
    let avg = (red + green + blue) / 3;
    if (y <= height / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > height / 7 && y < (height * 2) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(1.2 * avg - 51);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (height * 2) / 7 && y < (height * 3) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (height * 3) / 7 && y < (height * 4) / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (height * 4) / 7 && y < (height * 5) / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > (height * 5) / 7 && y < (height * 6) / 7) {
      if (avg < 128) {
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > (height * 6) / 7 && y < (height * 7) / 7) {
      if (avg < 128) {
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4 * avg + 153);
      }
    }
  }
  rainbowImage.drawTo(canvas);
}

function makeRainbow() {
  if (rainbowImage) {
    filterRainbow();
  }
  alert("you make image rainbow");
}

function reset() {
  if (image) {
    image.drawTo(canvas);
  }
  alert("you reset image");
}
