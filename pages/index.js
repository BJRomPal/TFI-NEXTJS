import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Hallar Hogar</title>
        <meta name="description" content="Aplicacion para encontrar inmuebles" />
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </>
  )
}
