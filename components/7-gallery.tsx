"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

type SelectedImage = { src: string; alt: string } | null;

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const scroll = (direction: "left" | "right") => {
    const gallery = scrollRef.current;
    if (!gallery) return;
    gallery.scrollBy({
      left: direction === "left" ? -gallery.clientWidth * 0.85 : gallery.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden py-4">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b89466]">Nossa história em imagens</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-[#fffaf2] md:text-5xl">Momentos que guardamos</h2>
      </div>

      <div className="relative">
        <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory items-center gap-5 overflow-x-auto px-1 pb-4">
          {WEDDING_CONFIG.fotos.map((foto) => {
            const landscape = foto.formato === "paisagem";
            return (
              <button
                type="button"
                key={foto.src}
                onClick={() => setSelectedImage(foto)}
                className={`relative shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-[#ead8bd]/15 bg-[#2b1d20] shadow-2xl transition-transform hover:scale-[1.01] ${
                  landscape
                    ? "aspect-[4/3] w-[88vw] max-w-[42rem]"
                    : "aspect-[3/4] w-[76vw] max-w-[25rem]"
                }`}
                aria-label={`Ampliar: ${foto.alt}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes={landscape ? "(max-width: 768px) 88vw, 672px" : "(max-width: 768px) 76vw, 400px"}
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </button>
            );
          })}
        </div>

        <button type="button" onClick={() => scroll("left")} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#1b1114]/80 text-white backdrop-blur-md transition-colors hover:bg-[#7b3543]" aria-label="Fotos anteriores">
          <ChevronLeft size={24} />
        </button>
        <button type="button" onClick={() => scroll("right")} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#1b1114]/80 text-white backdrop-blur-md transition-colors hover:bg-[#7b3543]" aria-label="Próximas fotos">
          <ChevronRight size={24} />
        </button>
      </div>

      {mounted && selectedImage && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true" aria-label="Foto ampliada">
          <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20" aria-label="Fechar foto">
            <X size={30} />
          </button>
          <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
};

export default Gallery;
