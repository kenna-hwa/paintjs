// 변수 선언

const canvas = document.querySelector("#jsCanvas");
const range = document.querySelector("#jsRange");
const colors = document.querySelectorAll(".controls_color")
const mode = document.querySelector("#jsMode")
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

// 조건 선언
let painting = false;
let filling = false;


//line 그리기

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

// stroke color 변경

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

colors.forEach(color => color.addEventListener("click", handleColorClick));

// stroke range 변경

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
    console.log(ctx.lineWidth)
}

if(range){
    range.addEventListener("input", handleRangeChange)
}

//fill button

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.textContent = "Fill"
    }else{
        filling = true;
        mode.textContent = "Paint"
    }
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}
