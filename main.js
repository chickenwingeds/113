function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    
    
}
function draw(){
    circle(50,40,50)
    ellipse(100,100,100,50)
    rect(150,150,55,55)

} 

function take_snapshot(){
    save('juan.png');

}

function filter_color(){
    tint_color = document.getElementById("color_image").value;
}