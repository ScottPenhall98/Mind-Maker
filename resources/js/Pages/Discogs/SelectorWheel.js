import React, {useEffect, useState} from 'react';
import wheel from '../../../images/wheelyGoodImage.png';

function SelectorWheel() {

  const [degrees, setDegrees] = useState(0);
  const [canvas, setCanvas] = useState();
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [firstMove, setFirstMove] = useState(false);
  const [firstPos, setFirstPos] = useState(0);
  const [startTime, setStartTime] = useState();

  /* Storages an array of objects that looks like:
        {
          time: 0.02s,
          degreesOfMovement: -0.123
        }
   */
  const [timeStorage, setTimeStorage] = useState([]);
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
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);
  //   return () => clearInterval(interval);
  // })

  // var stopTimer = (timer) => {
  //   console.log("here")
  //   clearInterval(timer);
  // }


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
    let angle = calculateAngle(posX, posY, canvasPosition.centerPos.x, canvasPosition.centerPos.y);

    let angleOfChange = angle - firstPos;

    let newTime = {
      time: Date.now() - startTime,
      degreesOfMovement: angleOfChange
    }
    // TODO check the total of degrees in time storage = 10, then start removing the first element in the array
    setTimeStorage(timeStorage.concat(newTime))
    return angleOfChange;

  };

  const mouseDown = (e) => {
    //Set transform degrees
    setMouseIsDown(true);
    //TODO start timer
    setStartTime(Date.now())
    setFirstMove(true);
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


  };
  const mouseMove = (e) => {
    if (mouseIsDown) {
      setDegrees(newDegrees(e.pageX, e.pageY));
    }
  };

  const mouseUp = (e) => {
    setMouseIsDown(false);
    // stopTimer(startTimer);
    // clearInterval(startTimer)
    console.log('up');
  };
  //get 10 degrees of movement then calculate the speed
  //how to calculate, speed
  //- speed is based off of seconds the last 10 degrees
  return (
    <div className="w-full h-full" onMouseMove={mouseMove} onMouseUp={mouseUp}>
      <canvas
        style={{transform: `rotate(${degrees}deg)`}}
        // style={{
        //   animation: 'spin-clockwise 1s linear infinite',
        // }}
        className="m-10"
        ref={canvas => setCanvas(canvas)}
        onMouseDown={mouseDown}
        width={750} height={750}/>
    </div>
  );
}

export default SelectorWheel;
