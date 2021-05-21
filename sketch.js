const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var CorrectTime, DisplayTime;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
       background(backgroundImg);
    }


    Engine.update(engine);

    DisplayTime = CorrectTime;
    if(CorrectTime<12){
        DisplayTime = CorrectTime+" AM"
    }
    if(CorrectTime===00){
        DisplayTime = "12 AM";
    }
    else{
        DisplayTime = (CorrectTime-12)+" PM"
    }


    // write code to display time in correct format here
    text("Time is: "+DisplayTime, 60,80);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")

    //change the data in JSON format
    var JSONresponse = await response.json();
    var DateTimee = JSONresponse.datetime;
  

    // write code slice the datetime
    CorrectTime = DateTimee.slice(11,13);
    console.log(CorrectTime);
    

    // add conditions to change the background images from sunrise to sunset
    if(CorrectTime>04 && CorrectTime<=06){
        bg = "sunrise1.png";
    }
    else if(CorrectTime>06 && CorrectTime<=08){
        bg = "sunrise2.png"
    }
    else if(CorrectTime>08 && CorrectTime<=10){
        bg = "sunrise3.png"
    }
    else if(CorrectTime>10 && CorrectTime<=12){
        bg = "sunrise4.png"
    }
    else if(CorrectTime>12 && CorrectTime<=14){
        bg = "sunrise5.png"
    }
    else if(CorrectTime>14 && CorrectTime<=16){
        bg = "sunrise6.png"
    }
    else if(CorrectTime>=16 && CorrectTime<=18){
        bg = "sunset7.png";
    }
    else if(CorrectTime>18 && CorrectTime<=20){
        bg = "sunset8.png"
    }
    else if(CorrectTime>20 && CorrectTime<=22){
        bg = "sunset9.png"
    }
    else if(CorrectTime>22 && CorrectTime<=00){
        bg = "sunset10.png"
    }
    else if(CorrectTime>00 && CorrectTime<=02){
        bg = "sunset11.png"
    }
    else if(CorrectTime>02 && CorrectTime<=04){
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
