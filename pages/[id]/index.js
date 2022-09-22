import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Header from 'components/Header';
import Footer from 'components/Footer';
import ButtonBarchart from 'components/ButtonBarchart';
import CarouselFotos from 'components/CarouselFotos';
import styles from '../../styles/indexId.module.css';
import axios from 'axios';
import dynamic from "next/dynamic"

const AvisoPage = () => {
  const Map = dynamic(() => import("../../components/Map"), { ssr:false });
  const router = useRouter()
  const [aviso, setAviso] = useState(null); 
  useEffect(() => {
    fethAviso({"id" : router.query.id}).then((result) => setAviso(result.data));
  }, [])
  console.log(router.query.id);
  console.log(aviso);
  if(!aviso) {
    return <pre>Cargando...</pre>
  }
  const latitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[1]);
  const longitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[0]);


  return (
    <>
      <Header />
      <div className={styles.cuerpo} key={aviso._id}>
        <div className={styles.contenedorCarrousel}>
          <div className={styles.carrousel}>
            <CarouselFotos 
              fotos = {aviso.inmueble_id.fotos}
            />
          </div>
          <div className={styles.datosOperacion}>
            <p>{aviso.operacion.toUpperCase()}</p>
            <p>{aviso.monedaOperacion + ' ' + aviso.montoOperacion}</p>
          </div>  
        </div>
        <Map 
          latitud= {latitud}
          longitud= {longitud}
        />
        <ButtonBarchart 
          barrio={aviso.inmueble_id.direccion.barrio}
        />
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
