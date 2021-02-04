const Engine = Matter.Engine,
const World = Matter.World,
const Events = Matter.Events,
const Bodies = Matter.Bodies; 

var engine , world;
var hero , 

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  

}

function draw() {
  background("");
  Engine.update(engine);

}

