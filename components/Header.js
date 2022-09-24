import logo from '../public/logo.png';
import headerStyles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from '../services/userService';


export default function Header() {

  const router = useRouter();
  const [userLogged, setUserLogged] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  

  useEffect(() => {
    const token = userService.checkLogin()
    if (token) {
      setUserLogged(true)
      const user = localStorage.getItem('usuario');
      setNombreUsuario(user);
    }
  }, [])

  const spanUserOptions = () => {
    setMostrarOpciones(!mostrarOpciones);
  }

  const irProfile = () => {
    const cookies = new Cookies()
    const token = cookies.get("TOKEN");
    if (token) {
      router.push('/profile');  
      }
    else {
      router.push('/singin');
    }
  }

  const cerrarSesion = () => {
    setNombreUsuario('');
    setUserLogged(false);
    sessionStorage.removeItem('usuario');
    const cookies = new Cookies();
    cookies.remove("TOKEN", {path: '/'});
    setMostrarOpciones(false);
    const pathname = router.asPath;
    if(pathname == '/profile' ){
       router.push('/')
    }
  } 

  return (
    <header>
      <div className={headerStyles.headerLogoLogin}>
        <div>
          <Image
                priority
                src={logo}
                className={headerStyles.AppLogo}
                alt='Logo'
              />
        </div>
        <div>
          <Link href='/singin'>
            <button  className={userLogged ? headerStyles.botonIniciaApagado : headerStyles.botonIniciaSesion}>Iniciar Sesión</button>
          </Link>
            <button onClick={spanUserOptions} className={userLogged ? headerStyles.botonUsuario : headerStyles.botonUsuarioApagado}><p>Hola, {nombreUsuario}</p></button>
          <ul className={mostrarOpciones ? headerStyles.profileUsuario : headerStyles.profileUsuarioApagado}>
            <li>
              <a className={headerStyles.profileUsuarioItems} onClick={irProfile}>Mis datos</a>
            </li>
            <li>
              <a className={headerStyles.profileUsuarioItems} onClick={cerrarSesion}>Cerrar Sesión</a>
            </li>
          </ul>
        </div>       
      </div>
      <nav className={headerStyles.navStyle} >
        <a className={headerStyles.aInicio} href='/'>Inicio</a>
        <a className={headerStyles.aLinks} href='/'>Blog</a>
        <a className={headerStyles.aLinks} href='/'>Buscar Inmuebles</a>
      </nav>
    </header>      
  )
}