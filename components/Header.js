import logo from '../public/logo.png';
import headerStyles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className={headerStyles.headerLogoLogin}>
        <Image
              priority
              src={logo}
              className={headerStyles.AppLogo}
              alt='Logo'
            />
        <Link href='/singup'>
          <button  className={headerStyles.headerBotonIniciaSesion}>Crear Cuenta</button>
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