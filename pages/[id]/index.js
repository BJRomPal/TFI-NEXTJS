import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Header from 'components/Header';
import Footer from 'components/Footer';
//import ButtonBarchart from 'components/ButtonBarchart';
import CarouselFotos from 'components/CarouselFotos';
import styles from '../../styles/indexId.module.css';
import axios from 'axios';
import Image from 'next/image';
//import dynamic from "next/dynamic"

const AvisoPage = () => {
  //const Map = dynamic(() => import("../../components/Map"), { ssr:false });
  const router = useRouter()
  const [aviso, setAviso] = useState(null); 
  useEffect(() => {
    fethAviso({"id" : router.query.id}).then((result) => setAviso(result.data));
  }, [])


  if(!aviso) {
    return <pre>Cargando...</pre>
  }
  
  const latitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[1]);
  const longitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[0]);
  console.log(aviso);



  return (
    <>
      <Header />
      <div className={styles.cuerpo} key={aviso._id}>
        <div className={styles.contenedorInmueble}>
          <div className={styles.carrousel}>
            <CarouselFotos 
              fotos = {aviso.inmueble_id.fotos}
            />
          </div>
          <div className={styles.datosInmueble}>
            <div className={styles.datosOperacion}>
              <p className={styles.operacion}>{aviso.operacion.toUpperCase()}</p>
              <p>{`${aviso.monedaOperacion} ${aviso.montoOperacion}`}</p>
            </div>
            <div className={styles.tipoYUbicacion}>
              <p>{`Ubicacion: ${aviso.inmueble_id.direccion.calle} 
                 ${aviso.inmueble_id.direccion.altura}`}</p>
              <p>{`Barrio: ${aviso.inmueble_id.direccion.barrio}`}</p>
              <p>{`Medidas del Terreno: ${aviso.inmueble_id.casa}`}</p>
              <p>{`Superficie Total: ${aviso.inmueble_id.supTotal} m2`}</p>
              <p>{`Superficie Cubierta: ${aviso.inmueble_id.supCubierta} m2`}</p>
            </div>
            <div className={styles.contenedorIconos}>
            <Image
                className={styles.iconos}
                alt='Icono Ambientes'
                src='/iconos/ambientes.png'
                width={30}
                height={30}
              />
              <p className={styles.cantidad}>{aviso.inmueble_id.cantAmbientes} amb</p>
              <Image
                className={styles.iconos}
                alt='Icono camas'
                src='/iconos/bed.png'
                width={30}
                height={30}
              />
              <p className={styles.cantidad}>{aviso.inmueble_id.dormitorios} dorm</p>
              <Image
                className={styles.iconos}
                alt='Icono baños'
                src='/iconos/toilete.png'
                width={30}
                height={30}
              />
              <p className={styles.cantidad}>{aviso.inmueble_id.banos} baños</p>
            </div>
            <table className={styles.ambientes}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Ambiente</th>
                  <th className={styles.tableHeader}>Medidas</th>
                </tr>
            </thead>
            <tbody>
              {aviso.inmueble_id.ambientes.map((ambiente) => 
                <tr key={ambiente._id}>
                  <td className={styles.tableRow}>{ambiente.tipo}</td>
                  <td className={styles.tableRow}>{`${ambiente.medidas} metros`}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className={styles.vendedor}>
            <p>Comercializa: {aviso.nombreAnunciante}</p>
            <p>{`Contacto: ${aviso.mailContacto}`}</p>
          </div>
          </div>  
        </div>
        <div className={styles.descripcion}>
          <p>{aviso.inmueble_id.descripcion}</p>
        </div>
        
        
      </div>
      <Footer />
    </>
  )
}

/*
export async function getServerSideProps({ params }) {
  await dbConnect()
  const aviso = await Aviso.findById(params.id).populate({path: 'inmueble_id'}).lean() 

  console.log(aviso.inmueble_id.direccion.position.coordinates[0]);
  return { props: { aviso : JSON.parse(JSON.stringify(aviso))} }
}
<Map 
          latitud= {latitud}
          longitud= {longitud}
        />
        <ButtonBarchart 
          barrio={aviso.inmueble_id.direccion.barrio}
        />

*/
async function fethAviso(id) {
  const configuration = {
    method: "post",
    url: 'http://localhost:3000/api/inmuebles/[id]',
    data: id,
    contentType: 'application/json',
    Accept: 'application/json',
  };
    return await axios(configuration)
}

export default AvisoPage
