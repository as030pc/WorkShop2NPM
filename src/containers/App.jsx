import React, { useState, useEffect } from "react";
import CardsFrutas from '../componentes/CardsFrutas'
import CardsProductos from '../componentes/CardsProductos'
import axios from "axios";
import { Link } from "react-router-dom";


function App() {
  // api heroku
  const url = 'https://apiworkshop2.herokuapp.com/'
  const [productos, setProductos] = useState([])
  const [frutos, setFrutos] = useState([])

  // useEffect
  useEffect(() => {
    getProductos()
    getFrutos()
  }, [])

  const getProductos = async () => {
    await axios.get(`${url}productos`)
      .then(response => {
        setProductos(response.data) //response.data: es una variable 
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  const getFrutos = async () => {
    await axios.get(`${url}frutos`)
      .then(response => {
        setFrutos(response.data) //response.data: es una variable 
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  // Este log muestra primero un array vacio primero ya que la data se demora un segundo en consumirse
  // Luego que se consume la data, se vuelve a mostrar el log con la data de la api
  // console.log(productos) 

  return (
    <div>
        <div className="ofertas">
          <h1> <b>Ofertas</b> </h1>
          <section className="contenedor-productos">
            {frutos.map((frutos, index) => {

              return <CardsFrutas key={index} frutas={frutos} />
            })

            }
          </section>
        </div>

        <div className="populares">
          <h1> <b>Populares</b> </h1>
          <section className="contenedor-productos">
            {productos.map((producto, index) => {

              return <CardsProductos key={index} producto={producto} />
            })

            }
          </section>
        </div>
    </div>
  );
}

export default App;


