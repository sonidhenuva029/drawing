canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent="";
var color = "black";
var width = 2;
var last_position_of_X = "";
var last_position_of_Y = "";


canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) { 
    mouseEvent = "mousedown";
    width = document.getElementById("width").value;
    color = document.getElementById("color").value;
    
 }

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) { 
    mouseEvent = "mouseup";
 }

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) { 
    mouseEvent = "mouseleave";
 }

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    var x_position = e.clientX - canvas.offsetLeft;
    var y_position = e.clientY - canvas.offsetTop;
    if( mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(x_position, y_position);
        ctx.stroke();
    }
    last_position_of_X = x_position;
    last_position_of_Y = y_position;

}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
    mouseEvent = "mousedown";
    width = document.getElementById("width").value;
    color = document.getElementById("color").value;
    last_position_of_X = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_Y = e.touches[0].clientY - canvas.offsetTop

}



canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e) {
    var x_position = e.touches[0].clientX - canvas.offsetLeft;
    var y_position = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(x_position, y_position);
        ctx.stroke();

}









