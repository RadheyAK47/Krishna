function preload(){
    filter=loadImage("filter.png")

}

function setup(){
    canvas=createCanvas(480,480);
    canvas.center();

    video=createCapture(VIDEO)
    video.size(480,480)
    video.hide();

    posNet=ml5.posNet(video,modelLoaded);
    posNet.on("pose",getPoses);
}

function draw(){
    image(video,0,0,480,480)

    image(filter,200,200,200,200)

}