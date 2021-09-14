import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Crud = () => {

    const [productos, setProductos] = useState([])

    // useEffect
    useEffect(() => {
        peticionGet()
    }, [])


    const peticionGet = async () => {
        const url = "https://apiworkshop2.herokuapp.com/productos"
        await axios.get(url)
            .then(response => {
                setProductos(response.data)
            }
            )
            .catch(
                console.error(Error)
            )
    }



    console.log(productos)

    return (
        <div>

            {/* tabla crud productos */}

            {

            }
            <table className="m-20">
                {/* Cabecera tabla */}
                <thead className="bg-dark">
                    <tr>
                        <th>item</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <hr style={{ height: "3px" }, { color: "black" }} />
                {/* cuerpo tabla */}
                <tbody>
                    {productos.map(producto => {
                        return (
                            <tr>

                                <th>{producto.id}</th>
                                <th>{producto.nombre}</th>
                                <th>{producto.cantidad}</th>
                                <th>{producto.precio}</th>
                            </tr>
                        )
                    })

                    }
                </tbody>
                <hr style={{ height: "3px" }, { color: "balck" }} />
                {/* pié de tabla */}
                <tfoot>
                    <tr>
                        <th>total items</th>
                        <th>Producto #1</th>
                        <th> 2 </th>
                        <th>$20</th>
                    </tr>
                </tfoot>

            </table>

            <div>
                <h1>Opciones</h1>
            </div>
        </div>
    )
}


