import Image from "next/image";
import styles from '../styles/indexId.module.css';
import { useState, useEffect } from "react";

export default function Casa({operacion, monedaOperacion, montoOperacion, 
    calle, altura, barrio, casa, supTotal, 
    supCubierta, cantAmbientes, dormitorios, 
    banos, ambientes, cochera, cantidadCochera, 
    tipoCochera, ameneties, nombreAnunciante, mailContacto}) {

    const [componentCochera, setComponentCochera] = useState(null)
    useEffect(() => {
      if (cochera) {
        setComponentCochera(
          <div className={styles.cochera}>
            <p>Cochera: {cantidadCochera}</p>
            <p>Tipo de Cochera: {tipoCochera}</p>
          </div>
        )
      }
      else {
        setComponentCochera(
          <div className={styles.cochera}>
            <p>El inmueble carece de cochera</p>
          </div>
        )
    } 
  },[])

return (
  <div className={styles.datosInmueble}>
    <div className={styles.datosOperacion}>
      <p className={styles.operacion}>{operacion.toUpperCase()}</p>
      <p>{`${monedaOperacion} ${montoOperacion}`}</p>
    </div>
    <div className={styles.tipoYUbicacion}>
      <p>{`Ubicacion: ${calle} 
        ${altura}`}</p>
      <p>{`Barrio: ${barrio}`}</p>
      <p>{`Medidas del Terreno: ${casa}`}</p>
      <p>{`Superficie Total: ${supTotal} m2`}</p>
      <p>{`Superficie Cubierta: ${supCubierta} m2`}</p>
    </div>
    <div className={styles.contenedorIconos}>
      <Image
      className={styles.iconos}
      alt='Icono Ambientes'
      src='/iconos/ambientes.png'
      width={30}
      height={30}
      />
      <p className={styles.cantidad}>{cantAmbientes} amb</p>
      <Image
      className={styles.iconos}
      alt='Icono camas'
      src='/iconos/bed.png'
      width={30}
      height={30}
      />
      <p className={styles.cantidad}>{dormitorios} dorm</p>
      <Image
      className={styles.iconos}
      alt='Icono baños'
      src='/iconos/toilete.png'
      width={30}
      height={30}
      />
      <p className={styles.cantidad}>{banos} baños</p>
    </div>
      <table className={styles.ambientes}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Ambiente</th>
            <th className={styles.tableHeader}>Medidas</th>
          </tr>
        </thead>
        <tbody>
        {ambientes.map((ambiente) => 
          <tr key={ambiente._id}>
            <td className={styles.tableRow}>{ambiente.tipo}</td>
            <td className={styles.tableRow}>{`${ambiente.medidas} metros`}</td>
          </tr>
        )}
        </tbody>
      </table>
    <div className={styles.cochera}>
      <p>Cochera: {cantidadCochera}</p>
      <p>Tipo de Cochera: {tipoCochera}</p>
    </div>
    <div className={styles.ameneties}>
      <ul>
      {ameneties.map((amenetie) => 
        <li key={amenetie} className={styles.amenetie}>- {amenetie}</li> 
      )}
      </ul>
    </div>
    <div className={styles.vendedor}>
      <p>Comercializa: {nombreAnunciante}</p>
      <p>{`Contacto: ${mailContacto}`}</p>
    </div>
  </div>  
)
}