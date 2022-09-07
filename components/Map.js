import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { iconComisaria, iconBombero, iconEscuela, iconHospital, iconGastronomia, iconCultural, iconUniversidad} from '../public/markerIcons';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Map(props) {

  const data = {
    longitud: props.longitud, 
    latitud: props.latitud}

  const [comisarias, setComisarias] = useState([]);
  const [hospitales, setHospitales] = useState([]);
  const [bomberos, setBomberos] = useState([]);
  const [escuelas, setEscuelas] = useState([]);
  const [universidades, setUniversidades] = useState([]);
  const [cultural, setCultural] = useState([]);
  const [gastronomia, setGastronomia] = useState([]);
  const [api, setApi] = useState('')

  useEffect(() => {
    fetchData('comisarias', data).then((result) => setComisarias(result.data));
    fetchData('hospitales', data).then((result) => setHospitales(result.data));
    fetchData('bomberos', data).then((result) => setBomberos(result.data));
    fetchData('escuelas', data).then((result) => setEscuelas(result.data));
    fetchData('universidades', data).then((result) => setUniversidades(result.data));
    fetchData('cultural', data).then((result) => setCultural(result.data));
    fetchData('gastronomia', data).then((result) => setGastronomia(result.data));
    fetchApi({"id" : "630d7e2158596ddf0b2f3a86"}).then((result) => setApi(result.data));
  }, [])


  return (
    <MapContainer center={[props.latitud, props.longitud]} 
      zoom={14}
      scrollWheelZoom={false} 
      style={{height: 500, width: 500}}>
      <TileLayer
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=MYTOKEN`}
        />
      <Marker 
      position={[props.latitud, props.longitud]}
      draggable={true}
      animate={true}
      >
        <Popup>
          Casa Mariano
        </Popup>
      </Marker>
      <LayersControl position='topright'>
        <LayersControl.Overlay name='Comisarias'>
          <LayerGroup>
          {comisarias.map((comisaria) => (
            <Marker
              key={comisaria._id} 
              position={[comisaria.location.coordinates[1], comisaria.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconComisaria}
              >
              <Popup>
                Nombre: {comisaria.nombre}
                <br />
                Domicilio: {comisaria.domicilio}
                <br />
                Barrio: {comisaria.barrio} 
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Bomberos'>
          <LayerGroup>
          {bomberos.map((bombero) => (
            <Marker
              key={bombero._id}
              position={[bombero.location.coordinates[1], bombero.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconBombero}
              >
              <Popup>
                Nombre: {bombero.nombre}
                <br />
                Domicilio: {bombero.domicilio}
                <br />
                Barrio: {bombero.barrio} 
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Hospitales'>
          <LayerGroup>
          {hospitales.map((hospital) => (
            <Marker
              key={hospital._id}
              position={[hospital.location.coordinates[1], hospital.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconHospital}
              >
              <Popup>
                Nombre: {hospital.nombre}
                <br />
                Domcilio: {hospital.domicilio}
                <br />
                Barrio: {hospital.barrio}
                <br />
                Tipo de Hospital: {hospital.administracion} 
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Colegios'>
          <LayerGroup>
          {escuelas.map((escuela) => (
            <Marker
              key={escuela._id} 
              position={[escuela.location.coordinates[1], escuela.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconEscuela}
              >
              <Popup>
                Nombre: {escuela.nombre}
                <br />
                Domicilio: {escuela.domicilio}
                <br />
                Barrio: {escuela.barrio}
                <br />
                Nivel: {escuela.nivel}
                <br />
                Tipo de Escuela: {escuela.administracion}
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Universidades'>
          <LayerGroup>
          {universidades.map((universidad) => (
            <Marker
              key={universidad._id} 
              position={[universidad.location.coordinates[1], universidad.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconUniversidad}
              >
              <Popup>
                Nombre: {universidad.nombre}
                <br />
                Facultad: {universidad.facultad}
                <br />
                Domicilio: {universidad.domicilio}
                <br />
                Barrio: {universidad.barrio}
                <br />
                Tipo de Universidad: {universidad.administracion}
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Cultural'>
          <LayerGroup>
          {cultural.map((cultura) => (
            <Marker
              key={cultura._id} 
              position={[cultura.location.coordinates[1], cultura.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconCultural}
              >
              <Popup>
                Nombre: {cultura.nombre}
                <br />
                Tipo: {cultura.categoria}
                <br />
                Domicilio: {cultura.domicilio}
                <br />
                Barrio: {cultura.barrio}
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Gastronomía'>
          <LayerGroup>
          {gastronomia.map((gastro) => (
            <Marker
              key={gastro._id} 
              position={[gastro.location.coordinates[1], gastro.location.coordinates[0]]}
              draggable={false}
              animate={false}
              icon={iconGastronomia}
              >
              <Popup>
                Nombre: {gastro.nombre}
                <br />
                Categoría: {gastro.categoria}
                <br />
                Cocina: {gastro.cocina}
                <br />
                Domicilio: {gastro.domicilio}
                <br />
                Barrio: {gastro.barrio}
              </Popup>
            </Marker>
          ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  )
}

async function fetchData(api, data) {
  const configuration = {
    method: "post",
    url: `http://localhost:3000/api/inmuebles/${api}`,
    data: data,
    contentType: 'application/json',
    Accept: 'application/json',
  };
    return await axios(configuration)
}

async function fetchApi(id) {
  const configuration = {
    method: "post",
    url: 'http://localhost:3000/api/apis/mapbox',
    data: id,
    contentType: 'application/json',
    Accept: 'application/json',
  };
    return await axios(configuration)
}