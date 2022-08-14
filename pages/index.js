import Head from 'next/head';
import Header from '../components/Header'
import Carousel from 'components/Carousel';
import CardPost from 'components/CardPost';
import PostDestacado from 'components/PostDestacado';
import styleHome from '../styles/home.module.css';
import Footer from 'components/Footer';


export default function Home() {
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
      <Carousel/>
      <div className={styleHome.divPosts}>
        <div className={styleHome.divCardPosts}>
          <h1 className={styleHome.notas}>Últimas notas</h1>
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
        <div className={styleHome.divNotaDestacada}>
          <h1 className={styleHome.notas}>Nota Destacada</h1>
          <PostDestacado />
        </div>  
      </div>
      <Footer />
    </>
  )
}
