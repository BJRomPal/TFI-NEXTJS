import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Header from 'components/Header';
import Footer from 'components/Footer';
import ButtonBarchart from 'components/ButtonBarchart';
import CarouselFotos from 'components/CarouselFotos';
import Casa from 'components/Casa';
import styles from '../../styles/indexId.module.css';
import axios from 'axios';
import Image from 'next/image';
import dynamic from "next/dynamic"
import Departamento from 'components/Departamento';

const AvisoPage = () => {
  const Map = dynamic(() => import("../../components/Map"), { ssr:false });
  const router = useRouter()
  const [aviso, setAviso] = useState(null);
  const [inmuebleAviso, setInmuebleAviso] = useState(null) 
  useEffect(() => {
    fethAviso({"id" : router.query.id})
      .then((result) => {
        setAviso(result.data)
        if (result.data.inmueble_id.tipo === 'departamento') {
          setInmuebleAviso(
            <Departamento 
          operacion = {result.data.operacion}
          monedaOperacion = {result.data.monedaOperacion}
          montoOperacion= {result.data.montoOperacion}
          calle = {result.data.inmueble_id.direccion.calle}
          altura = {result.data.inmueble_id.direccion.altura}
          pisoInmueble = {result.data.inmueble_id.propiedadHorizontal.pisoInmueble}
          barrio = {result.data.inmueble_id.direccion.barrio}
          cantPisos = {result.data.inmueble_id.propiedadHorizontal.cantPisos}
          cantUnidades = {result.data.inmueble_id.propiedadHorizontal.cantUnidades}
          cantAsensores = {result.data.inmueble_id.propiedadHorizontal.cantAsensores}
          Expensas = {result.data.inmueble_id.propiedadHorizontal.Expensas} 
          supTotal = {result.data.inmueble_id.supTotal}
          supCubierta = {result.data.inmueble_id.supCubierta}
          cantAmbientes = {result.data.inmueble_id.cantAmbientes} 
          dormitorios = {result.data.inmueble_id.dormitorios}
          banos = {result.data.inmueble_id.banos} 
          ambientes = {result.data.inmueble_id.ambientes}
          cochera = {result.data.inmueble_id.cochera}
          cantidadCochera = {result.data.inmueble_id.tipoCochera.cantidad} 
          tipoCochera = {result.data.inmueble_id.tipoCochera.tipo}
          ameneties = {result.data.inmueble_id.ameneties}
          nombreAnunciante = {result.data.nombreAnunciante} 
          mailContacto = {result.data.mailContacto}
        />
        )}
        else {
          setInmuebleAviso(
            <Casa 
                operacion = {result.data.operacion}
                monedaOperacion = {result.data.monedaOperacion}
                montoOperacion= {result.data.montoOperacion}
                calle = {result.data.inmueble_id.direccion.calle}
                altura = {result.data.inmueble_id.direccion.altura}
                barrio = {result.data.inmueble_id.direccion.barrio}
                casa = {result.data.inmueble_id.casa} 
                supTotal = {result.data.inmueble_id.supTotal}
                supCubierta = {result.data.inmueble_id.supCubierta}
                cantAmbientes = {result.data.inmueble_id.cantAmbientes} 
                dormitorios = {result.data.inmueble_id.dormitorios}
                banos = {result.data.inmueble_id.banos} 
                ambientes = {result.data.inmueble_id.ambientes}
                cochera = {result.data.inmueble_id.cochera}
                cantidadCochera = {result.data.inmueble_id.tipoCochera.cantidad} 
                tipoCochera = {result.data.inmueble_id.tipoCochera.tipo}
                ameneties = {result.data.inmueble_id.ameneties}
                nombreAnunciante = {result.data.nombreAnunciante} 
                mailContacto = {result.data.mailContacto}
              />
          )
        }
      
      });
  }, [])
  

  if(!aviso) {
    return <pre>Cargando...</pre>
  }

  const latitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[1]);
  const longitud = parseFloat(aviso.inmueble_id.direccion.position.coordinates[0]);

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
          {inmuebleAviso}       
        </div>          
        <div className={styles.descripcion}>
          <p>{aviso.inmueble_id.descripcion}</p>
        </div>
        <div className={styles.contenedorMapa}>
          <h1 className={styles.contenedorMapaTitulo}>Mapa de ubicacion del Inmueble y Servicios Cercanos</h1>
          <Map className={styles.mapa}
            latitud= {latitud}
            longitud= {longitud}
          />
        </div>
        <div className={styles.contenedorEstadisticas}>
          <h1 className={styles.contenedorMapaTitulo}>Estadísticas de Seguridad</h1>
          <ButtonBarchart 
            barrio={aviso.inmueble_id.direccion.barrio}
          />
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

        <ButtonBarchart 
          barrio={aviso.inmueble_id.direccion.barrio}
        />

*/
async function fethAviso(id) {
  const configuration = {
    method: "post",
    url: './api/inmuebles/[id]',
    data: id,
    contentType: 'application/json',
    Accept: 'application/json',
  };
    return await axios(configuration)
}

export default AvisoPage
