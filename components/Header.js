import logo from '../public/logo.png';
import headerStyles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';

export default function Header() {

  const [userLogged, setUserLogged] = useState(false);

  const checkLogin = () => {
    const cookies = new Cookies()
    const token = cookies.get("TOKEN");
    console.log(token);
    if (token) {setUserLogged(true)}
  }

  useEffect((checkLogin), [])

  return (
    <header>
      <div className={headerStyles.headerLogoLogin}>
        <Image
              priority
              src={logo}
              className={headerStyles.AppLogo}
              alt='Logo'
            />
        <Link href='/singin'>
          <button  className={userLogged ? headerStyles.headerBotonIniciaApagado : headerStyles.headerBotonIniciaSesion}>Iniciar Sesión</button>
        </Link>
      </div>
      <nav className={headerStyles.navStyle} >
        <a className={headerStyles.aInicio} href='/'>Inicio</a>
        <a className={headerStyles.aLinks} href='/blog'>Blog</a>
        <a className={headerStyles.aLinks} href='/buscar'>Buscar Inmuebles</a>
      </nav>
    </header>      
  )
}