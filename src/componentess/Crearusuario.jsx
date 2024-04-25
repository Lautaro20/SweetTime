import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged } from 'firebase/auth';
import appp from "../firebase/config";
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const auth = getAuth(appp);

function Crearusuario() {
    const { register, handleSubmit,reset } = useForm();
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


    const enviar = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log("Creacion de cuenta exitoso");
            reset();
        } catch (error) {
            console.error("Error al crear cuenta", error);
        }
    };

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
        <div className='contenedorsesion' >
            <div className="contenedorsesesion2">

                <h3 className='crearcuenta'>Crear Cuenta</h3>
            {usuario ? (
                <button className='cerracesion1' onClick={cerrarSesion}>Cerrar sesión</button>
            ) : (
                <form className='formulariocrearcuenta' onSubmit={handleSubmit(enviar)}>
                    <input type="email" {...register("email")} />
                    <input type="password" {...register("password")} />
                    <button className="botonsesion1" type="submit">Enviar</button>
                </form>
            )}

            </div>
            
        </div>
    );
}

export default Crearusuario;