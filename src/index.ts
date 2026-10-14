import "./style.css"

const PHI = (1 + Math.sqrt(5)) / 2;
const TAU = Math.PI * 2;
const DEG2RAD_FACTOR = TAU / 360;

const config = {
    width: 0,
    height: 0
};

// module scripts are deferred, so the DOM is ready at this point
const canvas = document.getElementById("screen") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const width = (window.innerWidth) | 0;
const height = (window.innerHeight) | 0;

config.width = width;
config.height = height;

canvas.width = width;
canvas.height = height;

const paint = () => {

    ctx.fillStyle = "#000";
    ctx.fillRect(0,0, width, height);

}

paint()

canvas.addEventListener("click", paint, true)

