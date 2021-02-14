import React from 'react'
import { render } from 'react-dom'
import Index from '../../Layouts/Index'

function Home () {
  return(
    <h2>Welcome to Mind Maker</h2>
  )
}

Home.layout = page => <Index value={"Cheddar"} children={page}/>;

export default Home;
