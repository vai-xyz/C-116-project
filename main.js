noseX=0;
noseY=0;
function preload(){
    lip_filter=loadImage("https://i.postimg.cc/0NSTzfM1/710051.png")
}

function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function draw(){
    image(video,0,0,350,350);
    image(lip_filter,noseX-23,noseY+18,55,40);
}

function take_snapshot(){
    save('my_filter_lipstick_image.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('nose x='+ results[0].pose.nose.x);
        console.log('nose y='+ results[0].pose.nose.y);
    }
}