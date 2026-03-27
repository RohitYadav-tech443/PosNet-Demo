let shahrukh_img;
let capture;
let posenet=null;
let singlePose;
let skeleton;
let actor_img;
let specs,smoke;

function setup(){
    createCanvas(800,600);
    // console.log('Setup Funstion')
    capture=createCapture(VIDEO)
    capture.size(800,600)
    capture.hide()
    
    posenet=ml5.poseNet(capture,modelLoaded)
    posenet.on('pose',receivedPoses)

    actor_img=loadImage('images/Sarita.png')
    specs=loadImage('images/specs.png')
    cigar=loadImage('iamges/cigar.png')
}

let noseX=0;let noseY=0;
let reyeX=0;let reyeY=0;
let leyeX=0;let leyeY=0;
function receivedPoses(poses){
    console.log(poses); 
    if(poses.length>0){
        singlePose = poses[0].pose;
        skeleton=poses[0].skeleton
    }   
    console.log(noseX+" "+noseY);
    
}

function modelLoaded(){
    console.log('Model Loaded');
    
}
// the setup code runs only for once when it is runned
// the draw code runs infinte times when it is runned

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} 

function draw(){
    translate(width, 0);
    scale(-1, 1);
    // console.log("Draw function")
    // r=getRandomArbitrary(0,255);
    // g=getRandomArbitrary(0,255);
    // b=getRandomArbitrary(0,255);
    // fill(r,g,b) ;
    // ellipse(mouseX,mouseY,50,50)
    // image(shahrukh_img,mouseX,mouseY,100,100);
    image(capture,0,0,800,600);
    fill(255,0,0)

    if(singlePose){
        for (let i =0;i<singlePose.keypoints.length;i++){
        ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,15);
        }
        stroke(255,255,255)
        strokeWeight(5)
        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y)
        }

        let d = dist(singlePose.leftEye.x, singlePose.leftEye.y,
                 singlePose.rightEye.x, singlePose.rightEye.y);

        let imgSize = map(d, 20, 100, 100, 300);

        image(actor_img,
            singlePose.nose.x - imgSize/2,
            singlePose.nose.y - imgSize/2,
            imgSize,
            imgSize);
    }
    
    // background(200);
    // // point
    // point(200,200)
    // // line
    // line(200,200,300,300)
    // // traingle
    // triangle(100,200,300,200,150,250)
    // // rectangle
    // rect(300,200,100,100)
    // // circle
    // ellipse(200,300,100,100)

    // stroke and colour rgb&opacity
    // stroke(255,0,0);
    // strokeWeight(2)
    // fill(132,100,34,50) // colour filling
    // ellipse(140,200,100,100)
    // stroke(0,255,0);
    // ellipse(250,200,100,100)
    // ellipse(360,200,100,100)
    // stroke(0,0,255);
    // ellipse(480,200,100,100)
    // ellipse(600,200,100,100)
}