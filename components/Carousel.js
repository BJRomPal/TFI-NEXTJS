import useEmblaCarousel from 'embla-carousel-react'
import carouselStyles from '../styles/carousel.module.css';
import { useState, useEffect, useCallback } from "react";
import destacados from '../public/destacados';
import CardInmueble from './CardInmueble';

import Link from "next/link";


export default function Carousel() {
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
          {destacados.map((destacado) => (
            <CardInmueble
              key={destacado.id} 
              operacion={destacado.operacion}
              descripcion={destacado.descripcion}
              barrio={destacado.barrio}
              precio={destacado.precio}
              vendedor={destacado.vendedor}
              foto={destacado.foto}
              m2={destacado.m2}
              ambientes={destacado.ambientes}
              dormitorios={destacado.dormitorios}
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