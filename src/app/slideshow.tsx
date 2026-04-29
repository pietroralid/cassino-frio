"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  title: string;
  caption: string;
};

type SlideshowProps = {
  slides: Slide[];
};

export default function Slideshow({ slides }: SlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  function goToPrevious() {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActive((current) => (current + 1) % slides.length);
  }

  return (
    <main className="slideshow" aria-label="Fotos da Praia do Cassino">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          className={`slide-image ${index === active ? "is-active" : ""}`}
          src={slide.src}
          alt={slide.title}
          fill
          priority={index === 0}
          sizes="100vw"
        />
      ))}

      <div className="shade" />

      <section className="slide-copy">
        <p>Praia do Cassino, RS</p>
        <h1>{slides[active].title}</h1>
        <span>{slides[active].caption}</span>
      </section>

      <nav className="slide-controls" aria-label="Controles do slideshow">
        <button type="button" onClick={goToPrevious} aria-label="Foto anterior">
          ‹
        </button>
        <div className="dots" aria-label="Selecionar foto">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={index === active ? "dot is-active" : "dot"}
              onClick={() => setActive(index)}
              aria-label={`Mostrar foto ${index + 1}`}
              aria-current={index === active}
            />
          ))}
        </div>
        <button type="button" onClick={goToNext} aria-label="Proxima foto">
          ›
        </button>
      </nav>
    </main>
  );
}
