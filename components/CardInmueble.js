import Image from "next/image";
import cardStyle from '../styles/cardinmueble.module.css'

export default function CardInmueble() {
  return (
    <div className={cardStyle.contenedorPrincipal}>
      <div className={cardStyle.contenedorImagen}>
        <Image
        className={cardStyle.imagenInmueble}
        alt="Imagen Inmueble"
        src='/imagenes/comedor1.jpg'
        width={330}
        height={330}
        />
      </div>
      <div className={cardStyle.contenedorDescripcion}>
        <h2 className={cardStyle.tipoOperacion}>Venta</h2>
        <h1 className={cardStyle.descripcionPrincipal}>Departamento de 3 ambientes</h1>
        <div className={cardStyle.contenedorDatos}>
          <div className={cardStyle.contendorBarrioPrecio}>
            <p className={cardStyle.barrio}>Belgrano</p>
            <p className={cardStyle.precio}>U$S 80.000</p>
          </div>
          <p className={cardStyle.inmobiliaria}>Pirulo Inmobiliaria</p>
        </div>
        <div className={cardStyle.contenedorIconos}>
          <Image
            className={cardStyle.iconos}
            alt='Icono m2'
            src='/iconos/m2.png'
            width={30}
            height={30}
          />
          <p className={cardStyle.cantidad}>80 m2</p>
          <Image
            className={cardStyle.iconos}
            alt='Icono Ambientes'
            src='/iconos/ambientes.png'
            width={30}
            height={30}
          />
          <p className={cardStyle.cantidad}>3 amb</p>
          <Image
            className={cardStyle.iconos}
            alt='Icono camas'
            src='/iconos/bed.png'
            width={30}
            height={30}
          />
          <p className={cardStyle.cantidad}>2 dorm</p>
          </div>
        </div>
      </div>
    );
  }
  