import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./CarouselThumb";
import styleEmbla from '../styles/carouselfotos.module.css'

const CarouselFotos = ({ fotos }) => {
  const cantSlides = [...Array(fotos.length).keys()]
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className={styleEmbla.embla}>
        <div className={styleEmbla.emblaViewport} ref={mainViewportRef}>
          <div className={styleEmbla.emblaContainer}>
            {cantSlides.map((slide) => (
              <div className={styleEmbla.emblaSlide} key={fotos[slide]._id}>
                <div className={styleEmbla.emblaSlideInner}>
                  <img
                    className={styleEmbla.emblaSlideImg}
                    src={fotos[slide].url}
                    alt="Imagen del Inmueble"
                  />                 
                </div>
                <div className={styleEmbla.textContainer}>
                  <p>{fotos[slide].descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styleEmbla.emblaThumb}>
        <div className={styleEmbla.emblaViewport} ref={thumbViewportRef}>
          <div className={styleEmbla.emblaContainerThumb}>
            {cantSlides.map((slide) => (
              <Thumb
                onClick={() => onThumbClick(slide)}
                selected={slide == selectedIndex}
                imgSrc={fotos[slide].url}
                key={fotos[slide]._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselFotos;
