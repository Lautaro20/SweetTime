import React, { useEffect, useState } from 'react'
import Pedirdatosporid from '../helpers/Pedirdatosporid'
import { useParams } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appp from "../firebase/config";
const auth = getAuth(appp);

export default function Inforecetas() {
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

    const [item, setItem] = useState()
    const id = useParams().id

    useEffect(() => {
        Pedirdatosporid(Number(id))
            .then((res) => {
                setItem(res)
            })
    },[id])
    
    

  return (
    <div>
    {usuario ? (
        item && (
            <div className='inforeccontenedor'>
                <img src={item.imagen1} alt="" />
                <h2 className='inforecetatitulo'>{item.titulo}</h2>
                <p>{item.receta}</p>
            </div>
        )
    ) : (
        <div className="contadv1">
        <div className='contadv'>
               <p className='adv'>Debe iniciar sesión</p> 
        </div>
        </div>
        
    )}
</div>
    
  )
}
