import Head from 'next/head';
import Header from '../components/Header'
import Carousel from 'components/Carousel';
import CardPost from 'components/CardPost';
import styleHome from '../styles/home.module.css';
import Footer from 'components/Footer';
import dbConnect from 'lib/dbConnect';
import Aviso from 'models/Aviso';



export default function Home({avisos}) {
  return (
    <>
      <Head>
        <title>Hallar Hogar</title>
        <meta name="description" content="Aplicacion para encontrar inmuebles" />
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Carousel
        avisos= {avisos}
        />
      <div className={styleHome.divPosts}>
        <div className={styleHome.divCardPosts}>
          <h1 className={styleHome.notas}>Últimas notas</h1>
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()
  require("models/Inmueble");
  const result = await Aviso.find({destacado: true})
    .select('nombreAnunciante monedaOperacion montoOperacion operacion')
    .populate({path: 'inmueble_id', select: 'titulo supTotal cantAmbientes dormitorios direccion fotoPrincipal'})
  const avisos = result.map((doc) => {
    const aviso = doc.toObject()
    aviso._id = aviso._id.toString()
    aviso.inmueble_id._id = aviso.inmueble_id._id.toString() 
    return aviso
  })
  return { props: { avisos: avisos } }
}
