var lastpositionofx, lastpositionofy;
var width = screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
canvas=document.getElementById("lecanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
if(width < 992)
{
    document.getElementById("lecanvas").width=newwidth;
    document.getElementById("lecanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",anothertoche);
function anothertoche(e){
    color=document.getElementById("color").value;
    wol=document.getElementById("width_of_line").value;
    console.log(color);
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;
    /*console.log("X="+mousex+",Y="+mousey);
    circle(mousex,mousey);*/
}
canvas.addEventListener("touchmove", mymove);
function mymove(e){
    cx=e.touches[0].clientX-canvas.offsetLeft;
    cy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=wol;
ctx.moveTo(lastpositionofx, lastpositionofy);
ctx.lineTo(cx, cy);
ctx.stroke();
lastpositionofx=cx;
lastpositionofy=cy;
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}