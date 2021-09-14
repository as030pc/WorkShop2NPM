import React from 'react'

//importamos las props de App.jsx las cuales vienen con el nombre de "info"
// y desestructuramos la data para pasarsela al "card"
const CardsFrutas = ({ frutas }) => {


    const { id, nombre, precio, cantidad, imagen, descuento } = frutas
    return (

        <div className="tarjetaProductos">

            <span>{(((precio-descuento)/precio)*100).toFixed(0)} % dto</span>
            <img src={imagen} alt="imagen producto" />

            <p><b>${precio}</b><del>${descuento}</del></p>
            <p>{nombre}</p>
            <br />
            {/* El boton lleva una clase con el id. para saber que producto 
                estamos agg al carrito
                 */}
            <button className={id} id="botonProducto">Agregar</button>
        </div>

    )
}

export default CardsFrutas
