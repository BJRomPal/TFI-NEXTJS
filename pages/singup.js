import style from '../styles/singup.module.css';
import Image from 'next/image';
import imagen from '../public/ImagenSingUp.jpg';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'


export default function Singup() {
  const router = useRouter();
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [emailValid, setEmailValid] = useState(true);

  const [form, setForm] = useState({
    nombre: '',
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

  const formValidate = () => {
    let err = {}
    const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pruebaPatternEmail = patternEmail.test(form.email); 
    if (!pruebaPatternEmail) err.email = "El Correo Electrónico no es válido"
    return err
  }

  const postData = async (form) => {
    try {
      const res = await fetch('/api/users/singup', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(res.status)

      }

      router.push('/')
    } catch (error) {
      setMessage("Correo Electrónico ya registrado")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      setErrors({})
      setEmailValid(true);
      postData(form)
    } else {
      setMessage("");
      setEmailValid(false);
      setErrors(errs);
    }
     
}

  return (
    <div className={style.fondoColor}>
      <div className={style.contenedorPrincipal}>
        <form className={style.singUpForm} onSubmit={handleSubmit}>
          <fieldset>
            <legend className={style.formLabel} >REGÍSTRATE</legend>
            <div className={style.inputContainer}>
              <input 
                className={style.input} 
                type="text" 
                id="nombre" 
                name="nombre"
                maxLength="30" 
                value={form.nombre}
                onChange={handleChange} 
                required />
              <label htmlFor="nombre" className={style.inputLabel} >Nombre</label>
            </div>
            <div className={style.inputContainer}>
              <input 
                className={emailValid ? style.input : style.inputError} 
                type="email" 
                id="email" 
                name="email" 
                value={form.email}
                onChange={handleChange} 
                required />
              <label htmlFor="email" className={emailValid ? style.inputLabel : style.inputLabelError}>Correo Electrónico</label>
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
        <div>
          {Object.values(errors).map((err, index) => (
          <p className={style.error} key={index}>{err}</p>
        ))}
        </div>
          <button className={style.button} type="submit">Crea tu Cuenta</button>
          <div className={style.divTienesCuenta}>
              <span className={style.TienesCuenta}>¿Ya tienes una cuenta? 
                <Link href='/singin'>
                  <a className={style.iniciaSesion}>Inicia Sesión</a>
                </Link>
              </span>
          </div>
        </form>
        <div className={style.imagenSingUp}>
          <Image 
            priority
            src={imagen}
            className={style.imagen}
            alt='Imagen Sing Up'
            height={855}
          />
        </div>
      </div>
    </div>
    )
}