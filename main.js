leftEar_x=0;
leftEar_y=0;

function preload(){
    cat_ear= loadImage('https://i.postimg.cc/T329m1Dc/kawai-cat-ears.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0 )
    {
      console.log(results);

      leftEar_x = results[0].pose.leftEar.x;
      leftEar_y = results[0].pose.leftEar.y;
      
      console.log("leftEar x = " + leftEar_x); 
      console.log("leftEar y = " + leftEar_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(cat_ear,leftEar_x,leftEar_y,50,50);
}

function take_snapshot(){
    save('MyCatImage.png');
}