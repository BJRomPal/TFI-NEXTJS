import footerStyle from '../styles/footer.module.css';
import logo from '../public/logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={footerStyle.contenedorPrincipal}>
      <div className={footerStyle.contenedorLogo}>
        <Image
          priority
          src={logo}
          className={footerStyle.AppLogo}
          alt='Logo'
          width={140}
          height={50}
        />
      </div>
      <ul className={footerStyle.elementosFooter}>
        <li className={footerStyle.columnas}>
          <span className={footerStyle.titulos}>La Empresa</span>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Terminos y Condiciones</li>
            <li>Contáctenos</li>
          </ul>
        </li>
        <li className={footerStyle.columnas}>
          <span className={footerStyle.titulos}>Inmuebles</span>
          <ul>
            <li>Buscar inmuebles</li>
            <li>Publica inmuebles</li>
          </ul>
        </li>
        <li className={footerStyle.columnas}>
          <span className={footerStyle.titulos}>Blog</span>
          <ul>
            <li>Buscar noticias</li>
            <li>Últimas noticias</li>
          </ul>
        </li>
      </ul>
      <div className={footerStyle.barraFinal}>
        <p className={footerStyle.copyright}>© Copyrigth Hallar Hogar 2022</p>
      </div>
    </div>
  )
}