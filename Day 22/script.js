const canvas = document.getElementById("canvas");
const increaseBTN = document.getElementById("increase");
const decreaseBTN = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "#333";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
	isPressed = false;

	x = e.undefined;
	y = e.undefined;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed === true) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

function updateSizeOnScreen() {
	sizeEl.innerText = size;
}

colorEl.addEventListener("change", (e) => {
	color = e.target.value;
});

increaseBTN.addEventListener("click", () => {
	size += 2.5;
	if (size > 50) {
		size = 50;
	}

	updateSizeOnScreen();
});

decreaseBTN.addEventListener("click", () => {
	size -= 2.5;
	if (size < 5) {
		size = 5;
	}

	updateSizeOnScreen();
});

clearEl.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.width));
