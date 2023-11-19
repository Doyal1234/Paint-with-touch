canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
color="red";
width_of_line=4;
radius=5

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("Color").value;
width_of_line=document.getElementById("Width_of_line").value;
mouseevent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
current_position_mouse_x=e.clientX-canvas.offsetLeft;
current_position_mouse_y=e.clientY-canvas.offsetTop;
if (mouseevent=="mouseDown") {
console.log("Current position of x and y coordinates= ");
console.log("x = "+ current_position_mouse_x + "y = " + current_position_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y)
ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
ctx.stroke();
}
last_position_of_x=current_position_mouse_x;
last_position_of_y=current_position_mouse_y;
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
mouseevent="mouseLeave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseevent="mouseUp";
}

function Clear () {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

canvas.addEventListener("touchstart", my_touchStart);
    
function my_touchStart(e) {
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchMove);
function my_touchMove (e) {
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

   console.log("Last position of x and y coordinates = ");
   console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
   ctx.moveTo(last_position_of_x, last_position_of_y);

   console.log("Current position of x and y coordinates = ");
   console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
   ctx.stroke();
   last_position_of_x = current_position_of_touch_x; 
   last_position_of_y = current_position_of_touch_y;  
   }