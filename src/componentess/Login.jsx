import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import app from "../firebase/config";
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const auth = getAuth(app);

function Login() {
    const { register, handleSubmit, reset } = useForm();
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
            await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log("Inicio de sesión exitoso");
            reset();
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    const cerrarSesion = async () => {
        try {
            await signOut(auth);
            console.log("Sesión cerrada con éxito");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }

    return (
        <div className='contenedorsesion'>
            <div className="contenedorsesesion2">
                    <h3 className='iniciodesecion'>Login</h3>
                {usuario ? (
                    <button className='cerracesion1' onClick={cerrarSesion}>Cerrar sesión</button>
                ) : (
                    <form className='formularioinisiocesion' onSubmit={handleSubmit(enviar)}>
                        <input className='email' type="email" {...register("email")} />
                        <input className='password' type="password" {...register("password")} />
                        <button className="botonsesion1" type="submit">Enviar</button>
                        <Link className='botonsesion' to='/Crearusuario'>Crear Cuenta</Link>
                    </form>
                )}
            </div>
            
        </div>
    );
}

export default Login;