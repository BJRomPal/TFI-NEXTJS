import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import carouselStyles from '../styles/carousel.module.css';
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi])

  return (
    <div className={carouselStyles.embla} ref={emblaRef}>
      <div className={carouselStyles.embla__container}>
        <div className={carouselStyles.embla__slide}>Slide 1</div>
        <div className={carouselStyles.embla__slide}>Slide 2</div>
        <div className={carouselStyles.embla__slide}>Slide 3</div>
      </div>
    </div>
  )
} 