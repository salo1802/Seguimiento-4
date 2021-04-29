
let controller;

function setup() {
  createCanvas(1000, 700);
  controller = new MainController();
}

function draw() {
  background(255);
  controller.draw();
}

function mousePressed(){
  controller.clickButtons(); 
}
