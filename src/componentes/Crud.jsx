import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Crud = () => {

    const url = "https://apiworkshop2.herokuapp.com/"


    const [productoNew, setProductoNew] = useState({ nombre:"",
                                                    precio:"",
                                                    cantidad:"",
                                                    imagen:""
    
    })
    const [producto, setproducto] = useState([])

    useEffect(() => {
       
    }, [])

    const peticionPost = async () => {
        await axios.post(url, {
            nombre: productoNew.nombre,
            precio:productoNew.precio,
            cantidad:productoNew.cantidad,
            imagen:productoNew.cantidad
        })
        .then(respuesta => {
            alert ("Producto registrado con exito")
        })
    }

    return (
        <div>

<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-3 pt-0">
                <input type="text" placeholder="nombre" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="mb-3 pt-0">
                <input type="text" placeholder="descuento" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="mb-3 pt-0">
                <input type="text" placeholder="precio" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                <div className="mb-3 pt-0">
                <input type="text" placeholder="categoria" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
  </form>
</div>

            <form className="formRegistro" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        Registrar nuevo producto
                    </h1>
                
                    <input
                        type="text"
                        name="nombre"
                        className="inputNombre"
                        placeholder=" Ingrese su nombre"
                        required=""
                        onChange ={this.handleChange}

                    /> <br />
                    <input
                        type="text"
                        placeholder="Ingrese sus apellidos"
                        name="apellido"
                        className="inputApellido"
                        autoComplete="off"
                        onChange ={this.handleChange}
                    /> <br />

                    <input
                        type="email"
                        name="username"
                        className="inputCorreo"
                        placeholder="Ingrese un email valido"
                        required=""
                        onChange ={this.handleChange}

                    /> <br />

                    <input
                        type="Password"
                        name="password"
                        className="inputContrasena"
                        placeholder="Ingrese una contraseña"
                        required=""
                        onChange ={this.handleChange}

                    />
                    <br />
                    <button
                        type="submit"
                        className="btnRegistro"
                        onClick = {() => this.RegistroUsuario()}
                    >
                        Registro
                    </button>
                    <br />
                   
                </form>
            
        </div>
    )
}

export default Crud
