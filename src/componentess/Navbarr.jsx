import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getAuth,signOut, onAuthStateChanged } from 'firebase/auth';
import appp from "../firebase/config";
const auth = getAuth(appp);


export default function Navbarr() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUsuario(user);
          } else {
              setUsuario(null);
          }
      });
      return () => unsubscribe();
  }, []);

  const cerrarSesion = async () => {
    try {
        await signOut(auth);
        console.log("Sesión cerrada con éxito");
        // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
}

  return (
    <nav className='navbar'>  
        <div className='Logo'>SweetTime</div>
        <ul className='ElementNav'>
            <li ><Link className='Element' to='/'>Inicio</Link></li>
            <li ><Link className='Element' to='/Recetas'>Recetas</Link></li>
            <li ><Link className='Element' to='#'>Nosotros</Link></li>
            <li>{usuario ? <button className='cerrarsesion2' onClick={cerrarSesion}>Cerrar sesión</button> : <Link className='Element' to='/Login'>Login</Link>}</li>
        </ul>
    </nav>
  )
}
