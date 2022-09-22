import useEmblaCarousel from 'embla-carousel-react'
import carouselStyles from '../styles/carousel.module.css';
import { useState, useEffect, useCallback } from "react";
import CardInmueble from './CardInmueble';


export default function Carousel({avisos}) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 1.3,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);


  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={carouselStyles.titleContainer}>
        <h2 className={carouselStyles.title}>Inmuebles Destacados</h2>
      </div>
      <div className={carouselStyles.embla} ref={emblaRef}>
        <div className={carouselStyles.emblaContainer}>
          {avisos.map((aviso) => (
            <CardInmueble
              key={aviso._id}
              id={aviso._id} 
              operacion={aviso.operacion}
              descripcion={aviso.inmueble_id.titulo}
              barrio={aviso.inmueble_id.direccion.barrio}
              moneda={aviso.monedaOperacion}
              precio={aviso.montoOperacion}
              vendedor={aviso.nombreAnunciante}
              foto={aviso.inmueble_id.fotoPrincipal}
              m2={aviso.inmueble_id.supTotal}
              ambientes={aviso.inmueble_id.cantAmbientes}
              dormitorios={aviso.inmueble_id.dormitorios}
            />
          ))}
        </div>
      </div>
      <div className={carouselStyles.buttonContainer}>
        {scrollSnaps.map((_, idx) => (
         <button
          className={idx === selectedIndex ? carouselStyles.buttonYellow : carouselStyles.buttonGrey}
          key={idx}
          onClick={() => scrollTo(idx)}
          />
          ))}
      </div> 
    </>
  )
} 