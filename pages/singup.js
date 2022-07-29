import style from '../styles/singup.module.css';
import Image from 'next/image';
import imagen from '../public/ImagenSingUp.jpg';
import Link from 'next/link';


export default function Singup() {
return (
    <div className={style.fondoColor}>
      <div className={style.contenedorPrincipal}>
        <form className={style.singUpForm}>
          <fieldset>
            <legend className={style.formLabel} >REGÍSTRATE</legend>
            <div className={style.inputContainer}>
              <input className={style.input} type="text" id="nombre" name="nombre" required />
              <label htmlFor="nombre" className={style.inputLabel} >Nombre</label>
            </div>
            <div className={style.inputContainer}>
              <input className={style.input} type="email" id="email" name="email" required />
              <label htmlFor="email" className={style.inputLabel}>Correo Electrónico</label>
            </div>
            <div className={style.inputContainer}>
              <input className={style.input} type="password" id="password" name="password" required pattern="[A-Za-z0-9]{6,15}"/>
              <label htmlFor="password" className={style.inputLabel}>Contraseña</label>
            </div>
          </fieldset>
          <button className={style.button} type="submit">Crea tu Cuenta</button>
          <div className={style.divTienesCuenta}>
              <span className={style.TienesCuenta}>¿Ya tienes una cuenta? 
                <Link href='./signin'>
                  <a className={style.iniciaSesion}> Inicia Sesión</a>
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
          />
        </div>
      </div>
    </div>
    )
}