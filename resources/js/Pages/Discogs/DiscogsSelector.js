import React, {useEffect, useState} from 'react';
import Index from '../../Layouts/Index';
import wheel from '../../../images/wheelyGoodImage.png'

function DiscogsSelector() {

  const [degrees, setDegrees] = useState(0);
  const [canvas, setCanvas] = useState();
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [firstPos, setFirstPos] = useState(0);
  const [canvasPosition, setCanvasPosition] = useState(
    {
      width: 0,
      height: 0,
      centerPos: {
        x:0,
        y:0,
      }
    }
  );

  useEffect(() => {
    if(canvas !== undefined) {
      const context = canvas.getContext('2d');
      const image = new Image();
      image.src = wheel;
      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  });
  const calculateAndSetDegrees = (posX, posY) => {
    if(posX >= canvasPosition.centerPos.x && posY <= canvasPosition.centerPos.y){
      let angle = Math.atan((posX - canvasPosition.centerPos.x)/(canvasPosition.centerPos.y - posY))  * (180 / Math.PI);
      let angleOfChange = angle - firstPos
      //set first click to the 0 position somehow, angle of change will be
      if(firstClick){

      }else{
        setDegrees(degrees + angleOfChange)
      }

      setFirstClick(false);
    }
    if(posX > canvasPosition.centerPos.x && posY > canvasPosition.centerPos.y){
      let angle = Math.atan((posY - canvasPosition.centerPos.y)/(posX - canvasPosition.centerPos.x))  * (180 / Math.PI) + 90;
      let angleOfChange = angle - degrees
      setDegrees(degrees + angleOfChange)
    }
    if(posX <= canvasPosition.centerPos.x && posY > canvasPosition.centerPos.y){
      //x/y
      let angle = Math.atan((canvasPosition.centerPos.x - posX)/(posY - canvasPosition.centerPos.y))  * (180 / Math.PI) + 180;
      let angleOfChange = angle - degrees
      setDegrees(degrees + angleOfChange)
    }
    if(posX <= canvasPosition.centerPos.x && posY < canvasPosition.centerPos.y){
      //y/x
      let angle = Math.atan((canvasPosition.centerPos.y - posY)/(canvasPosition.centerPos.x - posX))  * (180 / Math.PI) + 270;
      let angleOfChange = angle - degrees
      setDegrees(degrees + angleOfChange)
    }
  }

  const mouseDown = (e) => {
    //Set transform degrees
    setMouseIsDown(true);
    setFirstClick(true);
    //Now change calculateSetDegrees too a function that returns degrees
    setFirstPos();
    if(canvasPosition.width === 0){
      setCanvasPosition({
        width: e.target.width,
        height: e.target.height,
        centerPos: {
          x: e.target.offsetLeft + (e.target.width / 2),
          y: e.target.offsetTop + (e.target.height / 2),
        }
      })
    }

  }
  const mouseMove = (e) => {
    if(mouseIsDown){
      calculateAndSetDegrees(e.pageX, e.pageY)
    }
  }

  const mouseUp = (e) => {
    setMouseIsDown(false);
    console.log('up')
  }

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
