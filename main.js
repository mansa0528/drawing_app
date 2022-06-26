const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sld = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
output.innerHTML = sld.value;
sld.oninput = function() {
    output.innerHTML = this.value;
    ctx.lineWidth = this.value;
}


let ctx = canvas.getContext('2d');
ctx.fillStyle = "white"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

let prevX = null
let prevY = null
ctx.lineWidth = 5;
ctx.fillStyle = "blue";


let array=[];
let index = -1;
let draw = false

function cCC(element){
    ctx.fillStyle = element.style.backgroundColor;
}
function cCanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    let array=[];
    let index = -1;
}

function cUndo(){
    
}

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)
window.addEventListener("touchstart", (e) => draw = true)
window.addEventListener("touchend", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }
    let currentX = e.clientX
    let currentY = e.clientY
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke()
    prevX = currentX
    prevY = currentY
})

window.addEventListener("touchmove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.touches[0].clientX
        prevY = e.touches[0].clientY
        return
    }
    let currentX = e.touches[0].clientX
    let currentY = e.touches[0].clientY
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.strokeStyle = ctx.fillStyle
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke()
    prevX = currentX
    prevY = currentY
})