import React, { useState, useEffect } from 'react'
import axios from 'axios'
import uuid from "react-uuid";

export const Crud = () => {

    const [productos, setProductos] = useState([])
    const [form, setForm] = useState({
        id:"",
        nombre: "",
        precio: "",
        cantidad: ""
    })

    // useEffect
    useEffect(() => {
        peticionGet()
    }, [])

    const url = "https://apiworkshop2.herokuapp.com/productos"
    const peticionGet = async () => {

        await axios.get(url)
            .then(response => {
                setProductos(response.data)
            }
            )
            .catch(
                console.error(Error)
            )
    }

    const handleChange = async (e) => {
        e.persist()
        await setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const peticionPost = async () => {
       
        await axios.post(url, {
            id:uuid, 
            nombre:form.nombre,
            precio:form.precio,
            cantidad:form.cantidad

        })
            .then(response =>{
                peticionGet()
            }
            )
    }



    // console.log(productos)

    return (
        <>
            <div className="flex">

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
                    <hr style={{ height: "3px" }, { color: "black" }} />

                </table>

                <div className="bg-gray-500">
                    <h1>opciones crud</h1>
                    <ul>
                        <li className="bg-yellow-500"><button>Editar</button></li>
                        <li className="bg-red-500"><button>Eliminar</button></li>
                        <li className="bg-green-500"><button>Agregar</button></li>
                    </ul>
                </div>


            </div>
            <div className="bg-gray-100 p-10">
                
                    <form className="form-group" className="bg-blue-300" onSubmit = {()=>handleSubmit()}>
                        {/* <div className="p-5 bg-gray-200">
                            <label for=""> ID </label>
                            <input type="text" class="form-control" name="id" id="" aria-describedby="helpId" placeholder="" readOnly value = {form.id} onChange ={handleChange} /> <br />

                        </div> */}
                        <div className="p-5 bg-gray-200">
                            <label for=""> Nombre del producto </label>
                            <input type="text" className="form-control" name="nombre" id="" aria-describedby="helpId" placeholder="" value = {form.nombre} onChange ={handleChange}/><br />

                        </div>
                        <div className="p-5 bg-gray-200">
                            <label for=""> Precio del producto </label>
                            <input type="text" className="form-control" name="precio" id="" aria-describedby="helpId" placeholder=""  value = {form.precio} onChange ={handleChange}/><br />

                        </div>
                        <div className="p-5 bg-gray-200">
                            <label for=""> Cantidad del producto </label>
                            <input type="text" className="form-control" name="cantidad" id="" aria-describedby="helpId" placeholder="" value = {form.cantidad} onChange ={handleChange} /><br />

                        </div>
                        <div>
                            <button onClick = {()=>peticionPost()} type ="submit">Enviar informacion</button>
                        </div>
                        
                    </form>
                    
                
            </div>
        </>
    )
}


