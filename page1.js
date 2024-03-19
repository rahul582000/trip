const createScratchCard = (canvasId, color) => {
  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");

  const init = () => {
    context.fillStyle = color;
    context.fillRect(0, 0, 500, 200);
  };

  let isDragging = false;

  const scratch = (x, y) => {
    //destination-out draws new shapes behind the existing canvas content
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    //arc makes circle - x,y,radius,start angle,end angle
    context.arc(x, y, 12, 0, 2 * Math.PI);
    context.fill();
  };


  //Events for touch and mouse
  let events = {
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
    touch: {
      down: "touchstart",
      move: "touchmove",
      up: "touchend",
    },
  };

  let deviceType = "";

  //Detech touch device
  const isTouchDevice = () => {
    try {
      //We try to create TouchEvent. It would fail for desktops and throw error.
      document.createEvent("TouchEvent");
      deviceType = "touch";
      return true;
    } catch (e) {
      deviceType = "mouse";
      return false;
    }
  };

  //Get left and top of canvas
  let rectLeft = canvas.getBoundingClientRect().left;
  let rectTop = canvas.getBoundingClientRect().top;

  //Exact x and y position of mouse/touch
  const getXY = (e) => {
    mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
    mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
  };

  isTouchDevice();
  //Start Scratch
  canvas.addEventListener(events[deviceType].down, (event) => {
    isDragged = true;
    //Get x and y position
    getXY(event);
    scratch(mouseX, mouseY);
  });

  //mousemove/touchmove
  canvas.addEventListener(events[deviceType].move, (event) => {
    if (!isTouchDevice()) {
      event.preventDefault();
    }
    if (isDragged) {
      getXY(event);
      scratch(mouseX, mouseY);
    }
  });

  //stop drawing
  canvas.addEventListener(events[deviceType].up, () => {
    isDragged = false;
  });

  //If mouse leaves the square
  canvas.addEventListener("mouseleave", () => {
    isDragged = false;
  });

  init();
};

createScratchCard("scratch-card1", "#a52a2a");
createScratchCard("scratch-card2", "#f09544");

function handlePercentage(filledInPixels) {
  filledInPixels = filledInPixels || 0;
  console.log(filledInPixels + '%');
  if (filledInPixels > 50) {
    canvas.parentNode.removeChild(context);
  }
}

function vadodara() {
  window.location = "palace.html";
}
function pavagadh() {
  window.location = "pava.html";
}
function food() {
  window.location = "food.html";
}
function vado() {
  window.location = "vado.html";
}

function movie() {
  window.location = "movie.html";
}

function champaner() {
  window.location = "champaner.html";
}

function water() {
  window.location = "water.html";
}

function temple() {
  window.location = "temple.html";
}

function ev() {
  window.location = "eve.html";
}

function end() {
  window.location = "end.html";
}