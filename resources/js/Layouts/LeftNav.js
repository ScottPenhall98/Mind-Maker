import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

function isActive(routeName){
  return routeName === route().current()
}

function LeftNav(){

  const items = [
    {
      title: "Home",
      href: route("home"),
      active: isActive('home')
    },
    {
      title: "Discogs Selector",
      href: route('discogsSelector') ,
      active: isActive("discogsSelector")
    },
    {
      title: "Price Charting Selector",
      href: "" ,
      active: isActive("hardCopy")
    }
  ]

  return(
    <div className="w-72 bg-gray-leftNav">
      <h1 className="text-center text-4xl text-white uppercase">
        Mind Maker
      </h1>
      <div className="mt-5 flex flex-col">
        {(items.map(item => (
          <Link key={item.title} href={item.href} className={`${item.active ? 'bg-gray-active' : 'bg-gray-darkTheme'} text-white text-lg`}>
            {item.title}
          </Link>
        )))}
      </div>
    </div>
  )

}

export default LeftNav