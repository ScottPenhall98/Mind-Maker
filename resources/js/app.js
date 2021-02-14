require('./bootstrap');
import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import Index from './Layouts/Index'


const app = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(app.dataset.page)}
    // resolveComponent={name => Index({name}).then(module => module.default)}
        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  app
)