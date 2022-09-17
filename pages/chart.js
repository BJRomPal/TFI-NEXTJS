import Header from "components/Header";
import Footer from "components/Footer";
import dynamic from "next/dynamic"
import BarChart from "components/Barchart";
import ButtonBarchart from "components/ButtonBarchart";

const barrio = "Colegiales";


export default function Chart() {
  return (
          <ButtonBarchart
            barrio={barrio}
          />  
  )
}
