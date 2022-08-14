import Image from "next/image"
import postStyle from '../styles/postdestacado.module.css'

export default function PostDestacado() {
  return (
    <div className={postStyle.contendorPost}>
      <div className={postStyle.contenedorImagen}>
        <Image 
          className={postStyle.imagenPost}
          alt="Imagen post"
          src='/imagenes/imagenesPosts/bamboo.jpg'
          width={400}
          height={400}
        />
      </div>
      <div className={postStyle.contenedorDatosPost}>
      <div className={postStyle.datosAutor}>
        <Image 
        className={postStyle.imagenAutor}
        alt="Imagen autor"
        src='/imagenes/autores/aristoteles.jpg'
        width={35}
        height={35}
        />
        <p className={postStyle.nombreAutor}>Aristoteles</p>
      </div>
      <div className={postStyle.divTitulo}>
        <h1 className={postStyle.tituloPost}>La elección del Escribano</h1>
      </div>
      <div className={postStyle.divSubtitulo}>
        <h3 className={postStyle.subtituloPost}>¿Quién tiene la potestad de elegir al Escribano interviniente en la escritura?</h3>
      </div>
      <div className={postStyle.infoPost}>
        <p className={postStyle.fechaPost}>22 de agosto de 2022</p>
        <p> - </p>   
        <p className={postStyle.temaPost}>Legal</p>
      </div>
    </div>
  </div>
  )
}