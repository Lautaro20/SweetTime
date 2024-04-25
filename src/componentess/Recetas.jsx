import React, { useState, useEffect } from 'react'
import Pedirdatos from '../helpers/Pedirdatos'
import { Link } from 'react-router-dom'

export default function Recetas() {
    
    const [productos, setProductos] = useState([])


    useEffect(() => {
        Pedirdatos()
            .then((res) => {
                setProductos(res)
            })
    }, [])
    


  return (
    <main className='contpro'>{productos.map((producto) => 
        <div className='Contenedorproductos'>
            <img className='imagen' src={producto.imagen1} alt="" />
            <h2>{producto.titulo}</h2>
            <Link className='Boton' to={`/Inforecetas/${producto.id}`}>Ver Más</Link>
        </div>
        )}
    </main>
  )
}
