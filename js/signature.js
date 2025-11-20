const canvas = document.getElementById("ttdCanvas");
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');

let drawing = false;

ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.lineCap = 'round';


if (canvas) {
  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);   
  });
  canvas.addEventListener("mouseup", (e) => {
    drawing = false;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);   
    ctx.stroke();
  });
}

function clearTTD() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
