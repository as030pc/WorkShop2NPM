import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
          
          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <Link to="/"><span className="font-bold text-3xl text-yellow-500   italic tracking-tight">Tiendita</span></Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4  lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-white">
        Blog
      </a>
    </div>

    <div className="flex items-center text-sm px-4 py-2 leading-none border rounded bg-green-600 text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-amber-600 mt-4 lg:mt-0">
    <Link to = "/crud"> <img src="https://res.cloudinary.com/axginterprise/image/upload/v1631664731/Vector_kqfnrc.png"></img></Link>
    </div>
    <div>
      <Link to="/carrito" className="flex items-center text-sm px-4 py-2 leading-none border rounded bg-yellow-500 text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-amber-600 mt-4 lg:mt-0"><img src="https://res.cloudinary.com/axginterprise/image/upload/v1631652951/Union_dqixsj.png"></img><h1> | </h1><span className="text-lg font-bold">5</span></Link>
    </div>
  </div>
</nav>
    
        </>
    )
}

export default Navbar
