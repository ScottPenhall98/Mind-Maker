import Index from '../../Layouts/Index';
import SelectorWheel from './SelectorWheel';
import React from 'react';

function DiscogsSelector() {
  //get 10 degrees of movement then calculate the speed
  //how to calculate, speed
  //- speed is based off of seconds in a spin
  return (
   <>
    <SelectorWheel/>
   </>
  );
}

DiscogsSelector.layout = page => <Index children={page}/>;

export default DiscogsSelector;
