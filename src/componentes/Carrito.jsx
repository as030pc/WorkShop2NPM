import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react' 
import {Link} from 'react-router-dom'
//dependencias a instalar: npm install @headlessui/react


export default function Carrito() {
  const [open, setOpen] = useState(true)
  const carrito = JSON.parse(localStorage.getItem('carrito'))
  const carro = JSON.parse(localStorage.getItem('carro'))
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <Link to="/">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      
                      <h1 className="text-4x1 text-black">X</h1>
                    </button>
                    </Link>
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Carrito</Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full border-2 border-solid border-gray-200  contenedor-carrito" aria-hidden="true">
                      <div className="carrito">
                            {/* <img src="https://res.cloudinary.com/axginterprise/image/upload/v1631660221/Family_Values_Shopping_b2sgpm.png"></img> */}
                            <h1 className="text-lg font-medium">Tu productos</h1>
                            {/* <button class="bg-yellow-500 text-white active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >
                        
                              Agregar Productos
                            </button> */}

                            {carrito.map(producto => {
                                  return(
                                    <div>
                                      <h1>{producto.nombre}</h1> 
                                      <p>{producto.precio}</p> 
                                      <img src={producto.imagen} alt="imagen producto" style={{width: "100px"}, {height: "100px"}}/>
                                    </div>
                                  )
                                }
                                 
                
                            )
                            }
                            <hr/>
                            {carro.map(producto => {
                                  return(
                                    <div>
                                    <h1>{producto.nombre}</h1> 
                                    <p>{producto.precio}</p> 
                                    <img src={producto.imagen} alt="imagen producto" style={{width: "50px"}, {height: "100px"}}/>
                                  </div>
                                  )
                                }
                                 
                
                            )
                            }
                            
                        </div>
                      </div>
                        
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}