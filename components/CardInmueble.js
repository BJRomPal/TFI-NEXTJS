import Image from "next/image";
import cardStyle from '../styles/cardinmueble.module.css'

export default function CardInmueble(props) {
  return (
    <div className={cardStyle.contenedorCardInmueble}>
      <div className={cardStyle.contenedorPrincipal}>
        <div className={cardStyle.contenedorImagen}>
          <Image
          className={cardStyle.imagenInmueble}
          alt="Imagen Inmueble"
          src={`/imagenes/inmuebles/${props.foto}.jpg`}
          width={330}
          height={330}
          />
        </div>
        <div className={cardStyle.contenedorDescripcion}>
          <h2 className={cardStyle.tipoOperacion}>{props.operacion}</h2>
          <h1 className={cardStyle.descripcionPrincipal}>{props.descripcion}</h1>
          <div className={cardStyle.contenedorDatos}>
            <div className={cardStyle.contendorBarrioPrecio}>
              <p className={cardStyle.barrio}>{props.barrio}</p>
              <p className={cardStyle.precio}>{props.precio}</p>
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
  