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
      </Head>
      <Header />
    </>
  )
}
