const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat,batImage;;
var walk_Aniamtion;
var drops=[];
var engine, world;
var person;
var rand;
var trigger;


var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
                        "bat4.png","bat5.png","bat6.png",
                        "bat7.png","bat8.png","bat9.png",
                        "bat10.png","bat11.png","bat12.png");

     walk_Aniamtion = loadAnimation("walking_1.png",
                        "walking_2.png",
                        "walking_3.png",
                        "walking_4.png",
                        "walking_5.png",
                        "walking_6.png",
                        "walking_7.png",
                        "walking_8.png");

   batImage = loadImage("batman.png")
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    person = createSprite(180,570,20,20);
    person.addAnimation("tag",walk_Aniamtion);
    person.scale = 0.38;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    trigger = false;

rectMode(CENTER)

    //create drops
    
    for(var i = 0; i < 200; i++){           
        drops.push( new Rain (random(20,480), random(-10,300)) )              
        console.log(i)
    }
   
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    push();
    fill("brown")
    rect(width/2,height-4,width,10)
    pop();

    if(trigger === true){
        person.x = width + 500;
        imageMode(CENTER)
        image(batImage,200,570,240,280)
    }
    

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        trigger = true;
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
        bat.visible = true;      
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        if(bat.visible === true){
            trigger = true;
        }
        
       
    }
    //FUNCTIONS FOR THE ARRAY
    for(var i = 0; i < drops.length; i++){           
        drops[i].display();
        drops[i].reset();
        
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    

    //display rain drops
   

    drawSprites();
}   

