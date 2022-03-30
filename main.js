function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectdetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="status:detecting obejects ";
}
img="";
status1="";
 
function preload(){
    img=loadImage("dog-cat.jpg");
}
function draw(){
    image(video,0,0,380,380);
    if(status1!=""){
        objectdetector.detect(video,gotResult);
        r= random(255);
        g= random(255);
        b= random(255);
    for(i=0;i<obeject.length;i++){
        document.getElementById("status").innerHTML="status:obeject detected";
       document.getElementById("Numberofobject").innerHTML="Number of  objects detected are"+obeject.length;   
        fill(r,g,b);
        percant=floor(obeject[i].confidence*100);
        text(obeject[i].label+""+percant+"%",obeject[i].x,obeject[i].y);
        stroke(r,g,b);
        rect(obeject[i].x,obeject[i].y,obeject[i].width,obeject[i].height);
    }

    }
}
obeject=[];
function gotResult(error,results){
 if (error){
     console.log(error);
 }
 console.log(results);
 obeject=results;
}

function modalLoaded(){
    console.log("modal is loaded");
    status1=true;
    objectdetector.detect(video,gotResult);
}