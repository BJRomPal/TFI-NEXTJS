import { getCoordenadas } from "./GeoData.js";

const address = "Montevideo";
const number = 800;

const data = await getCoordenadas(address, number);
console.log(data);

