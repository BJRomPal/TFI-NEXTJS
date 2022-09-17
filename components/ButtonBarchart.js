import { useState } from 'react'
import buttonStyle from '../styles/button.module.css'
import divStyle from '../styles/divButton.module.css'
import Barchart from './Barchart'

export default function ButtonBarchart( {barrio} ) {

  const charts = {
    homicidios: 
        <Barchart
        Barrio={barrio}
        titulo="Homicidios Totales - 2021"
        delito="homicidios" 
      />,
    hurtos: 
        <Barchart
        Barrio={barrio}
        titulo="Robos cada 10000 habitantes - 2021"
        delito="hurtos" 
      />,
    hurtosAutomotor: 
      <Barchart
      Barrio={barrio}
      titulo="Robos Automotores cada 10000 habitantes - 2021"
      delito="hurtos_automotor" 
    />
  }

  const [component, setComponent] = useState(charts.homicidios)
  console.log(component);
  const cambiarChart1 = () => {
      setComponent(charts.homicidios);
  }
  const cambiarChart2 = () => {
      setComponent(charts.hurtos);
  }
  const cambiarChart3 = () => {
      setComponent(charts.hurtosAutomotor);
  }

  return (
     <>
      <div className={divStyle.divPrincipal}>
          <button className={buttonStyle.button} onClick={cambiarChart1}>Homicidios</button>
          <button className={buttonStyle.button} onClick={cambiarChart2}>Robos</button>
          <button className={buttonStyle.button} onClick={cambiarChart3}>Robos Automotores</button>
      </div>
      {component}
    </>
  )
}