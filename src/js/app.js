const canvas = document.querySelector("#jsCanvas");
const colors = document.querySelectorAll(".controls_color")
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke()
    }
}

function handleColorClick(event){
    const color = window.getComputedStyle(event.target).backgroundColor;
    ctx.strokeStyle=color;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}

console.log(colors)
colors.forEach(color => color.addEventListener("click", handleColorClick))