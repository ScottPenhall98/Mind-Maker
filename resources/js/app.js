require('./bootstrap');
import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
// import { InertiaProgress } from '@inertiajs/progress'
//
// InertiaProgress.init()


const app = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  app
)