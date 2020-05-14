'use strict';

// Cal ajaxRequest each 1s

//------------------------------------------------------------------------------
//--- displayClock -------------------------------------------------------------
//------------------------------------------------------------------------------
// Display a clock.
// \param time The time data received via the Ajax request.
function displayClock(time)
{
  let canvas;
  let context;
  let radius;
  
  
  // Define context.
  canvas = document.getElementById('clock');
  context = canvas.getContext('2d');
  radius = canvas.height/2;
  context.translate(radius, radius);
  radius *= 0.9;

  // Draw clock background, numbers and hands.
  drawBackground(context, radius);
  drawNumbers(context, radius);
  // Call the drawHands function
  // drawHands (....)
  context.setTransform(1, 0, 0, 1, 0, 0);
}

//------------------------------------------------------------------------------
//--- drawBackground -----------------------------------------------------------
//------------------------------------------------------------------------------
// Draw clock background.
// \param context The drawing context.
// \param radius The clock radius.
function drawBackground(context, radius)
{
  let gradient;

  // White background.
  context.beginPath();
  context.arc(0, 0, radius, 0, 2*Math.PI);
  context.fillStyle = 'white';
  context.fill();

  // Gradient contour.
  gradient = context.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
  gradient.addColorStop(0, '#333');
  gradient.addColorStop(0.5, 'white');
  gradient.addColorStop(1, '#333');
  context.strokeStyle = gradient;
  context.lineWidth = radius*0.1;
  context.stroke();

  // Clock center.
  context.beginPath();
  context.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  context.fillStyle = '#333';
  context.fill();
}

//------------------------------------------------------------------------------
//--- drawNumbers --------------------------------------------------------------
//------------------------------------------------------------------------------
// Draw clock numbers.
// \param context The drawing context.
// \param radius The clock radius.
function drawNumbers(context, radius)
{
  let angle;
  
  context.font = radius*0.15 + 'px arial';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  for (let number = 1; number <= 12; number++)
  {
    angle = number*Math.PI/6;
    context.rotate(angle);
    context.translate(0, -radius*0.85);
    context.rotate(-angle);
    context.fillText(number.toString(), 0, 0);
    context.rotate(angle);
    context.translate(0, radius*0.85);
    context.rotate(-angle);
  }
}

//------------------------------------------------------------------------------
//--- drawHands ----------------------------------------------------------------
//------------------------------------------------------------------------------
// Draw clock hands.
// \param context The drawing context.
// \param radius The clock radius
// \param time The time
function drawHands(context, radius, time)
{
  let hours;
  let minutes;
  let seconds;

  // Get data (hours, minutes and seconds).
  // hours = ...;
  // minutes = ...;
  // seconds = ...;

  // Hours.
  hours %= 12;
  hours = (hours*Math.PI/6) + (minutes*Math.PI/(6*60)) +
    (seconds*Math.PI/(360*60));
  drawHand(context, radius*0.5, radius*0.07, hours);
  
  // Minutes.
  minutes = (minutes*Math.PI/30) + (seconds* Math.PI/(30*60));
  drawHand(context, radius*0.8, radius*0.07, minutes);

  // Seconds.
  seconds = (seconds*Math.PI/30);
  drawHand(context, radius*0.9, radius*0.02, seconds);
}

//------------------------------------------------------------------------------
//--- drawHand -----------------------------------------------------------------
//------------------------------------------------------------------------------
// Draw clock hand.
// \param context The drawing context.
// \param length The hand length.
// \param width The hand width.
// \param value The hand value.
function drawHand(context, length, width, value)
{
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = 'round';
  context.moveTo(0, 0);
  context.rotate(value);
  context.lineTo(0, -length);
  context.stroke();
  context.rotate(-value);
}
