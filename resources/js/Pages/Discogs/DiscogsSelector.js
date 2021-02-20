import React, {useEffect, useState} from 'react';
import Index from '../../Layouts/Index';
import wheel from '../../../images/wheelyGoodImage.png'

function DiscogsSelector() {

  const [degrees, setDegrees] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const mouseDown = (e) => {
    //Set transform degrees
    console.log('down')
  }
  const mouseMove = (e) => {
  //  if mouse dont set
    // set new degrees
  }

  const mouseUp = (e) => {

    console.log('up')
  }

  return (
    <>
      {/*animate-spin-slow*/}
      <img src={wheel} onMouseDown={mouseDown} onMouseUp={mouseUp} className={"w-3/4 p-4"}/>
    </>
  );
}

DiscogsSelector.layout = page => <Index children={page}/>;

export default DiscogsSelector;
