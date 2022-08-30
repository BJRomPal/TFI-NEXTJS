import Header from "components/Header";
import Footer from "components/Footer";
import dynamic from "next/dynamic"

const latitud= -34.57021785519658
const longitud= -58.44647567405414

export default function Mapa() {
  const MyMap = dynamic(() => import("../components/Map"), { ssr:false });
  return (
        <>
          <MyMap 
            latitud= {latitud}
            longitud= {longitud} 
          />
        </>
  )
}
