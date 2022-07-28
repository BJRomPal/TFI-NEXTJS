import style from '../styles/singup.module.css';
import Image from 'next/image';
import imagen from '../public/ImagenSingUp.jpg';


export default function Singup() {
return (
    <div className={style.fondoColor}>
      <div className={style.contenedorPrincipal}>
        <form className={style.singUpForm}>
          <fieldset>
            <legend className={style.formLabel} >REGÍSTRATE</legend>
            <label htmlFor="nombre" className={style.inputLabel} >Nombre</label>
            <input className={style.input} type="text" id="nombre" name="nombre" required />
      
            <label htmlFor="email" className={style.inputLabel}>Correo Electrónico</label>
            <input className={style.input} type="email" id="email" name="email" required />

            <label htmlFor="password" className={style.inputLabel}>Contraseña</label>
            <input className={style.input} type="password" id="password" name="password" required />
          </fieldset>
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