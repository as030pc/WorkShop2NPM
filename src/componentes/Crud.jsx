import React, { useState, useEffect } from 'react'
import axios from 'axios'
import uuid from "react-uuid";

export const Crud = () => {

    const [productos, setProductos] = useState([])
    const [form, setForm] = useState({
        id:"",
        nombre: "",
        precio: "",
        cantidad: "",
        imagen:""
    })

    // useEffect
    useEffect(() => {
        peticionGet()
    }, [])

    const url = "https://apiworkshop2.herokuapp.com/productos/"
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


    const seleccionarProducto = (form) => {        
        setForm({id:form.id,
            nombre:form.nombre,
            cantidad:form.cantidad,
            precio:form.precio,
            imagen:form.imagen

    })
        

    }

    const peticionPost = async () => {
       
        await axios.post(url, {
            id:uuid, 
            nombre:form.nombre,
            precio:form.precio,
            cantidad:form.cantidad,
            imagen:form.imagen

        })
            .then(response =>{
                peticionGet()
            }
            )
    }

    const peticionPut = async ()=>{
        await axios.put(url+form.id, form)
        .then(response => {
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })

    }

    const peticionDelete = async () => {
        await axios.delete(url+form.id)
        .then(response => {
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }


    // Cuando se le da click a un btn para seleccionar producto del CRUD

    // console.log(productos)

    return (
        <>
            <div className="flex">

                {/* tabla crud productos */}

                {

                }
                <table className="m-20">
                    {/* Cabecera tabla */}
                    <thead className="bg-gray-300">
                        <tr>
                            {/* <th>item</th> */}
                            <th className="px-20">Producto</th>
                            <th className="px-20">Cantidad</th>
                            <th className="px-20">Precio</th>
                            <th className="px-20">Seleccionar</th>
                        </tr>
                    </thead>
                    <hr style={{ height: "3px" }, { color: "black" }} />
                    {/* cuerpo tabla */}
                    <tbody>
                        {productos.map(producto => {
                            return (
                                <tr className="my-2">
                                    {/* <th className="py-3">{producto.id}</th> */}
                                    <th>{producto.nombre}</th>
                                    <th>{producto.cantidad}</th>
                                    <th>{producto.precio}</th>
                                    <button onClick = {()=>seleccionarProducto(producto)} className='pl-32' ><img src="https://res.cloudinary.com/axginterprise/image/upload/v1631679958/check-circle-regular_1_q7kajo.png" alt="/" id="btn-select"/></button> 
                                     
                                </tr>
                            )
                        })

                        }
                    </tbody>

                </table>

                


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
                            <input type="number" className="form-control" name="precio" id="" aria-describedby="helpId" placeholder=""  value = {parseInt(form.precio)} onChange ={handleChange}/><br />

                        </div>
                        <div className="p-5 bg-gray-200">
                            <label for=""> Cantidad del producto </label>
                            <input type="text" className="form-control" name="cantidad" id="" aria-describedby="helpId" placeholder="" value = {form.cantidad} onChange ={handleChange} /><br />

                        </div>
                        <div className="p-5 bg-gray-200">
                        <label for=""> Agregar una imagen </label>
                            <input type="text" className="form-control" name="imagen" id="" aria-describedby="helpId" placeholder="" value = {form.imagen} onChange ={handleChange} /><br />
                        </div>
                        <div>
                            <button onClick = {()=>peticionPost()} type ="submit" className="p-1" width="100px"> Agregar producto </button>
                        </div>
                        <div className="bg-gray-500">
                   
                    <ul>
                        <li className="bg-yellow-500"><button onClick = {()=>peticionPut()}>Editar</button></li>
                        <li className="bg-red-500"><button onClick = {()=>peticionDelete()}>Eliminar</button></li>
                        
                    </ul>
                </div>
                        
                    </form>

                   
                    
                
            </div>
        </>
    )
}


