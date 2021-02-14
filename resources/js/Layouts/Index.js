
import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'


const app = document.getElementById('app')

function Index({value, children}){
  return(
    <>
      <h1>
        {value}
      </h1>
      {children}
    </>
  )

}

export default Index