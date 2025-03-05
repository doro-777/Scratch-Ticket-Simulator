const ticketCanvas = document.getElementById('ticketCanvas');
const scratchCanvas = document.getElementById('scratchCanvas');
const ticketCtx = ticketCanvas.getContext('2d');
const scratchCtx = scratchCanvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
const scratchRadius = 40;
let currentTicket = '';

function initCanvas() {
    ticketCanvas.width = scratchCanvas.width = 2000;
    ticketCanvas.height = scratchCanvas.height = 1000;

    const tickets = ['000.png', '001.png', '010.png', '011.png', 
                    '100.png', '101.png', '110.png', '111.png'];
    currentTicket = tickets[Math.floor(Math.random() * tickets.length)];

    const ticketImage = new Image();
    const scratchLayer = new Image();

    ticketImage.onload = () => {
        ticketCtx.drawImage(ticketImage, 0, 0, 2000, 1000);
    };

    scratchLayer.onload = () => {
        scratchCtx.drawImage(scratchLayer, 0, 0, 2000, 1000);
    };

    ticketImage.src = `Tickets/${currentTicket}`;
    scratchLayer.src = 'silver_scratch.png';
}

function getMousePos(e) {
    const rect = scratchCanvas.getBoundingClientRect();
    const scaleX = scratchCanvas.width / rect.width;
    const scaleY = scratchCanvas.height / rect.height;

    if (e.touches) {
        return {
            x: (e.touches[0].clientX - rect.left) * scaleX,
            y: (e.touches[0].clientY - rect.top) * scaleY
        };
    }

    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function scratch(e) {
    if (!isDrawing) return;
    e.preventDefault();

    const pos = getMousePos(e);
    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.lineWidth = scratchRadius * 4;
    scratchCtx.lineCap = 'round';
    scratchCtx.moveTo(lastX, lastY);
    scratchCtx.lineTo(pos.x, pos.y);
    scratchCtx.stroke();

    lastX = pos.x;
    lastY = pos.y;
}

function startDrawing(e) {
    isDrawing = true;
    const pos = getMousePos(e);
    lastX = pos.x;
    lastY = pos.y;
}

scratchCanvas.addEventListener('mousedown', startDrawing);
scratchCanvas.addEventListener('mousemove', scratch);
scratchCanvas.addEventListener('mouseup', () => isDrawing = false);
scratchCanvas.addEventListener('mouseleave', () => isDrawing = false);

scratchCanvas.addEventListener('touchstart', startDrawing);
scratchCanvas.addEventListener('touchmove', scratch);
scratchCanvas.addEventListener('touchend', () => isDrawing = false);

initCanvas();
