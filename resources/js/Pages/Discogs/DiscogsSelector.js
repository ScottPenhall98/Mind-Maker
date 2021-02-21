import React, {useEffect, useState} from 'react';
import Index from '../../Layouts/Index';
import wheel from '../../../images/wheelyGoodImage.png';

function DiscogsSelector() {

  const [degrees, setDegrees] = useState(0);
  const [canvas, setCanvas] = useState();
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [firstMove, setFirstMove] = useState(false);
  const [firstPos, setFirstPos] = useState(0);
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
      let angle = calculateAngle(posX, posY, canvasPosition.centerPos.x, canvasPosition.centerPos.y)
      let angleOfChange = angle - firstPos;
      if(firstMove){
        return angleOfChange
      }else {
        return degrees + angleOfChange
      }
  };

  const mouseDown = (e) => {
    //Set transform degrees
    setMouseIsDown(true);
    setFirstMove(true);

    if (canvasPosition.width === 0) {
      let canvasCenterX =  e.target.offsetLeft + (e.target.width / 2)
      let canvasCenterY = e.target.offsetTop + (e.target.height / 2)
      setCanvasPosition({
        width: e.target.width,
        height: e.target.height,
        centerPos: {
          x: canvasCenterX,
          y: canvasCenterY
        },
      });
      setFirstPos(calculateAngle(e.pageX, e.pageY, canvasCenterX, canvasCenterY));

    }
    //Now change calculateSetDegrees too a function that returns degrees


  };
  const mouseMove = (e) => {
    if (mouseIsDown) {
      setDegrees(newDegrees(e.pageX, e.pageY));
    }
  };

  const mouseUp = (e) => {
    setMouseIsDown(false);
    console.log('up');
  };

  return (
    <div className="w-full h-full" onMouseMove={mouseMove} onMouseUp={mouseUp}>
      {/*animate-spin-slow*/}
      <canvas
        style={{transform: `rotate(${degrees}deg)`}}
        className="m-10"
        ref={canvas => setCanvas(canvas)}
        onMouseDown={mouseDown}
        width={750} height={750}/>
      {/*<img src={wheel} onMouseDown={mouseDown} onMouseUp={mouseUp} className={"w-3/4 p-4"}/>*/}
    </div>
  );
}

DiscogsSelector.layout = page => <Index children={page}/>;

export default DiscogsSelector;
