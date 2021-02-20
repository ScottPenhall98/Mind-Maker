import React from 'react';
import {render} from 'react-dom';
import Index from '../../Layouts/Index';
import wheel from '../../../images/wheelyGoodImage.png'

function Home() {
  return (
    <>
      <h1>Welcome to Mind Maker</h1>
      <img src={wheel} className={"w-3/4 animate-spin-slow"}/>
    </>
  );
}

Home.layout = page => <Index children={page}/>;

export default Home;
