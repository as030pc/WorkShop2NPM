import React, {useState, useEffect} from "react";
import Cards from "../componentes/Cards";
import axios from "axios";


function App() {
  // api heroku
  const url = 'https://apiworkshop2.herokuapp.com/'
  const [productos, setProductos] = useState([])
  const [oferta, setOferta] = useState([])
  
  // useEffect
  useEffect(() => {
    getProductos()
    getOfertas()
  }, [])
     
  const getProductos = async () =>  {
    await axios.get(`${url}populares`)
    .then(response => {
        setProductos(response.data) //response.data: es una variable 
    })
    .catch(error => {
        console.log(error.message);
    })
}   
// Este log muestra primero un array vacio primero ya que la data se demora un segundo en consumirse
// Luego que se consume la data, se vuelve a mostrar el log con la data de la api
// console.log(productos) 

const getOfertas = async () =>  {
  await axios.get(`${url}ofertas`)
  .then(response => {
      setOferta(response.data) //response.data: es una variable 
  })
  .catch(error => {
      console.log(error.message);
  })
} 

  
  return (
    <div>
     
      <div>
        <h1 className="w-100% b-2 text-sm">Ofertas</h1>
      </div>
      {/* {oferta.map((frutos, index)=>{
        return <Cards key={index} frutos={frutos}/>
            })} */}
      {productos.map((info, index)=>{
          return <Cards key={index} info={info}/>
      })}
     
    </div>
  );
}

export default App;


    // {/* <div className = "tarjetaProductos">
    //             <img src={props.frutos.imagen} alt="imagen producto"/>

    //             <p><b>${props.frutos.precio}</b></p>
    //             <p>{props.frutos.nombre}</p>
    //             <br/>
    //             <p>{props.frutos.cantidad}g - ${(props.frutos.precio/props.frutos.cantidad).toFixed(2)}/cantidad</p>
    //             {/* El boton lleva una clase con el id. para saber que producto 
    //             estamos agg al carrito
    //              */}
    //              <button className={id} id="botonProducto">Agregar</button>
    //             </div> */}
    