import style from '../styles/singup.module.css';
import Image from 'next/image';
import imagen from '../public/PuertoMadero.jpg';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import axios from 'axios';


export default function Singin() {
  const cookies = new Cookies();
  const router = useRouter();
  const contentType = 'application/json'
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState('')


  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const value = e.target.value.trim()
    const name = e.target.name

    setForm({
      ...form,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const configuration = {
      method: "post",
      url: './api/users/singin',
      data: form,
      contentType: contentType,
      Accept: contentType,
    };
      axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: '/',
        });
        localStorage.setItem('usuario', result.data.nombre);
        router.push('/');  
      })
      .catch((error) => {
        setMessage('Email o Contraseña erroneos');
        error = new Error();
      })     
}

  return (
    <div className={style.fondoColor}>
      <div className={style.contenedorPrincipal}>
        <form className={style.singUpForm} onSubmit={handleSubmit}>
          <fieldset>
            <legend className={style.formLabel} >INICIA SESIÓN</legend>
            <div className={style.inputContainer}>
              <input 
                className={style.input} 
                type="email" 
                id="email" 
                name="email" 
                value={form.email}
                onChange={handleChange} 
                required />
              <label htmlFor="email" className={style.inputLabel}>Correo Electrónico</label>
            </div>
            <div className={style.inputContainer}>
              <input 
                className={style.input} 
                type="password" 
                id="password" 
                name="password"
                minLength={6}
                maxLength={15} 
                value={form.password}
                onChange={handleChange} 
                required 
                />
              <label htmlFor="password" className={style.inputLabel}>Contraseña</label>
            </div>
          </fieldset>
          <p className={style.error}>{message}</p>
          <button className={style.button} type="submit">Inicia Sesión</button>
          <div className={style.divTienesCuenta}>
              <span className={style.TienesCuenta}>¿No tienes una cuenta? 
                <Link href='singup'>
                  <a className={style.iniciaSesion}>Crea una</a>
                </Link>
              </span>
          </div>
        </form>
        <div className={style.imagenSingUp}>
          <Image 
            priority
            src={imagen}
            className={style.imagen}
            alt='Imagen Sing In'
            height={740}
            width={900}
          />
          <h3 className={style.textoImagen}>Encuentra tu próximo hogar</h3>
        </div>
      </div>
    </div>
    )
}