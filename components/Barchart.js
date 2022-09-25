import axios from 'axios';
import { useState, useEffect } from 'react';
import { scaleBand, scaleLinear, max} from 'd3';

async function fetchData() {
  const configuration = {
    method: "get",
    url: `./api/inmuebles/delito`,
    contentType: 'application/json',
    Accept: 'application/json',
  };
  return await axios(configuration)
}

const width = 770;
const height = 920;
const margin = {
  top: 80,
  right:  20,
  bottom: 40,
  left: 200
}
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

export default function Barchart({Barrio, titulo, delito}) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
      fetchData().then((result) => {
        let datos = result.data;
        datos.map((d) => {
          if (d.barrio === Barrio) {
            d.color = '#F24607'
          }
          else d.color = "#083359"
        });
        setData(datos) 
        })
  }, [])
  
  if(!data) {
    return <pre>Cargando...</pre>
  }

  const yScale = scaleBand()
    .domain(data.map(d => d['barrio']))
    .range([0, innerHeight])
    .padding(.15)

  const xScale = scaleLinear()
    .domain([0, max(data, d => d[delito])])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <defs>
        <style type="text/css">@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");</style>
      </defs>
      <text x={margin.left} y={60} style={{fontSize : "0.7em", fill: "#F24607", fontFamily: "Montserrat", fontWeight: "bold"}}>{titulo}</text>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
      {xScale.ticks().map(tickValue => (
        <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
          <line y2={innerHeight} stroke='#d3d3d3' />
          <text style={{textAnchor: "middle", fontFamily: "Montserrat", fontSize: "0.7em" }} dy=".71em" y={innerHeight + 5}>{tickValue}</text>
        </g>
      ))}
      <line x2={innerWidth} y1={innerHeight} y2={innerHeight} stroke='black' />
      {yScale.domain().map(tickValue => (
          <text
            key={tickValue}
            style={{textAnchor: "end", fontSize: '.7em', fontFamily: "Montserrat"}} 
            x={-7} 
            y={yScale(tickValue) + yScale.bandwidth() / 2 + 4}>{tickValue}</text>
      ))}
      <line y2={innerHeight} stroke='black'/>
      {data.map(d => <rect
        key={d.barrio} 
        x={0} 
        y={yScale(d.barrio)} 
        width={xScale(d[delito])} 
        height={yScale.bandwidth()}
        fill={d.color} 
        />)}
        </g>
        <text x={width - 125} y={height} style={{fontSize : "0.8em", fill: "#F24607", fontFamily: "Montserrat", fontWeight: "bold"}}>Fuente: GCBA</text>
    </svg>
    )
}

