import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Carousel(props) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
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

}