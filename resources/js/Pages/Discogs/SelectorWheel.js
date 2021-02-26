import React, {useEffect, useState} from 'react';
import wheel from '../../../images/wheelyGoodImage.png';

function SelectorWheel() {

  const [degrees, setDegrees] = useState(0);
  const [canvas, setCanvas] = useState();
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [clockwise, setClockWise] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [firstPos, setFirstPos] = useState(0);
  const [timeOne, setTimeOne] = useState();
  const [timeTwo, setTimeTwo] = useState();
  const [canvasPosition, setCanvasPosition] = useState(
    {
      width: 0,
      height: 0,
      centerPos: {
        x: 0,
        y: 0,
      },
    },
  );

  useEffect(() => {
    if (canvas !== undefined) {
      const context = canvas.getContext('2d');
      const image = new Image();
      image.src = wheel;
      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  });
  const calculateAngle = (posX, posY, canvasPosCenterX, canvasPosCenterY) => {
    if (posX >= canvasPosCenterX && posY <= canvasPosCenterY) {
      return Math.atan((posX - canvasPosCenterX) / (canvasPosCenterY - posY)) * (180 / Math.PI);
    }
    if (posX > canvasPosCenterX && posY > canvasPosCenterY) {
      return Math.atan((posY - canvasPosCenterY) / (posX - canvasPosCenterX)) * (180 / Math.PI) + 90;
    }
    if (posX <= canvasPosCenterX && posY > canvasPosCenterY) {
      return Math.atan((canvasPosCenterX - posX) / (posY - canvasPosCenterY)) * (180 / Math.PI) + 180;
    }
    if (posX <= canvasPosCenterX && posY < canvasPosCenterY) {
      return Math.atan((canvasPosCenterY - posY) / (canvasPosCenterX - posX)) * (180 / Math.PI) + 270;
    }
  };

  const newDegrees = (posX, posY) => {
    const angle = calculateAngle(posX, posY, canvasPosition.centerPos.x, canvasPosition.centerPos.y);

    const angleOfChange = angle - firstPos;
    if(timeTwo){
      setTimeOne(timeTwo)
    }
    const newTime = {
      time: Date.now(),
      degreesOfMovement: angleOfChange
    }
    setTimeTwo(newTime)
    return angleOfChange;

  };

  const mouseDown = (e) => {
    if(!spinning){
      setMouseIsDown(true);
      setTimeOne({
        time: Date.now(),
        degreesOfMovement: 0
      })
      let canvasCenterX = e.target.offsetLeft + (e.target.width / 2);
      let canvasCenterY = e.target.offsetTop + (e.target.height / 2);
      if (canvasPosition.width === 0) {
        setCanvasPosition({
          width: e.target.width,
          height: e.target.height,
          centerPos: {
            x: canvasCenterX,
            y: canvasCenterY,
          },
        });
      }
      setFirstPos(calculateAngle(e.pageX, e.pageY, canvasCenterX, canvasCenterY));
      //Now change calculateSetDegrees too a function that returns degrees

    }
    //Set transform degrees
  };


  const mouseMove = (e) => {
    if (mouseIsDown) {
      setDegrees(newDegrees(e.pageX, e.pageY));
    }
  };

  const calculateSpeed = () =>{
    if(timeTwo){
      let distanceTraveled = timeTwo.degreesOfMovement - timeOne.degreesOfMovement
      //if number is positive set spin to clockwise
      let isClockwise = distanceTraveled > 0
      setClockWise(isClockwise)
      //now set distance traveled to positive

      const percentageOfOneRevolution = (Math.abs(distanceTraveled)/360) * 100
      //how many sof the percentage of one revolution increment can fit into the wheel
      const distancesInWheel = 100/percentageOfOneRevolution

      const time = (timeTwo.time - timeOne.time)
      let app = document.getElementById("app");

      let endRotate = (degrees + 360)
      app.style.setProperty('--rotate-start', degrees + "deg");
      app.style.setProperty('--rotate-end', endRotate + "deg");

      setSpeed(time / 1000 * distancesInWheel);
      setSpinning(true);
      //TODO could simply just get distanceTraveled/360. DO A TEST
    }

  }

  const mouseUp = (e) => {
    setMouseIsDown(false);
    calculateSpeed()
  };
  //get 10 degrees of movement then calculate the speed
  //how to calculate, speed
  //- speed is based off of seconds the last 10 degrees
  return (
    <div className="w-full h-full" onMouseMove={mouseMove} onMouseUp={mouseUp}>
      <canvas
        style={spinning ? {
            animation: `${clockwise ? 'spin-clockwise ' : 'spin-anti-clockwise ' } ${speed}s linear infinite`}
          :
          {transform: `rotate(${degrees}deg)`}}
        className="m-10"
        ref={canvas => setCanvas(canvas)}
        onMouseDown={mouseDown}
        width={750} height={750}/>
    </div>
  );
}

export default SelectorWheel;
