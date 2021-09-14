import React, { useState } from 'react'

//importamos las props de App.jsx las cuales vienen con el nombre de "info"
// y desestructuramos la data para pasarsela al "card"
const CardsProductos = ({ producto }) => {

    const [opendetail, setopendetail] = useState(false)
    const abrirModal = () => { setopendetail(!opendetail) }
    const { id, nombre, precio, cantidad, imagen } = producto

    return (
        <div className="tarjetaProductos">
            <div>
                <img src={imagen} alt="imagen producto" />
                <p><b>${precio}</b></p>
                <p>{nombre}</p>
                <br />
                <p>{cantidad}g - ${(precio / cantidad).toFixed(1)}/udad</p>
                {/* El boton lleva una clase con el id. para saber que producto 
                estamos agg al carrito
                 */}
                <button className={id} id="botonProducto" onClick={() => abrirModal()}>Agregar</button>
            </div>
            {opendetail ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative h-1/2 w-2/3 ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-yellow-500 border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => abrirModal()}
                                    >
                                        <span id="x" className="bg-yellow-500 text-black  h-6 w-6 text-2xl block outline-none focus:outline-none" >
                                            X
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <img src={imagen} alt="imagen Producto" width="350" height="350" />
                                    <h3>{nombre}</h3>
                                    <h4>{precio}/udad</h4>
                                    <button className="bg-yellow-500" >
                                        Agregar
                                    </button>
                                </div>
                                {/*footer*/}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default CardsProductos
