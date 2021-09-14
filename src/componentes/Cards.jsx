import React from 'react'

//importamos las props de App.jsx las cuales vienen con el nombre de "info"
// y desestructuramos la data para pasarsela al "card"
const Cards = ({info}) => {
    
    const {id, nombre, precio, cantidad, imagen } = info
    return (
        <div>

            <div className = "tarjetaProductos">
                <img src={imagen} alt="imagen producto"/>

                <p><b>${precio}</b></p>
                <p>{nombre}</p>
                <br/>
                <p>{cantidad}g - ${(precio/cantidad).toFixed(1)}/cantidad</p>
                {/* El boton lleva una clase con el id. para saber que producto 
                estamos agg al carrito
                 */}
                <button className={id} id="botonProducto">Agregar</button>
            </div>
        </div>
    )   
}

export default Cards
