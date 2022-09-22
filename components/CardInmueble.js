import Image from "next/image";
import cardStyle from '../styles/cardinmueble.module.css'
import Link from "next/link";

export default function CardInmueble(props) {
  return (
    <div className={cardStyle.contenedorCardInmueble}>
      <div className={cardStyle.contenedorPrincipal}>
        <div className={cardStyle.contenedorImagen}>
          <Link href={`/[id]/?id=${props.id}`} as={`/${props.id}`}>
            <Image
            className={cardStyle.imagenInmueble}
            alt="Imagen Inmueble"
            src={props.foto}
            width={280}
            height={280}
            />
          </Link>
        </div>
        <div className={cardStyle.contenedorDescripcion}>
          <h2 className={cardStyle.tipoOperacion}>{props.operacion.toUpperCase()}</h2>
          <Link href={`/[id]/?id=${props.id}`} as={`/${props.id}`}>
            <h1 className={cardStyle.descripcionPrincipal}>{props.descripcion}</h1>
          </Link>
          <div className={cardStyle.contenedorDatos}>
            <div className={cardStyle.contendorBarrioPrecio}>
              <p className={cardStyle.barrio}>{props.barrio}</p>
              <p className={cardStyle.precio}>{props.moneda + " " + props.precio}</p>
            </div>
            <p className={cardStyle.inmobiliaria}>{props.vendedor}</p>
          </div>
          <div className={cardStyle.contenedorIconos}>
            <Image
              className={cardStyle.iconos}
              alt='Icono m2'
              src='/iconos/m2.png'
              width={30}
              height={30}
            />
            <p className={cardStyle.cantidad}>{props.m2} m2</p>
            <Image
              className={cardStyle.iconos}
              alt='Icono Ambientes'
              src='/iconos/ambientes.png'
              width={30}
              height={30}
            />
            <p className={cardStyle.cantidad}>{props.ambientes} amb</p>
            <Image
              className={cardStyle.iconos}
              alt='Icono camas'
              src='/iconos/bed.png'
              width={30}
              height={30}
            />
            <p className={cardStyle.cantidad}>{props.dormitorios} dorm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  