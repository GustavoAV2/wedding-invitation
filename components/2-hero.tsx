"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [isMarried, setIsMarried] = useState(false);
  const weddingDate = useMemo(
    () => new Date(WEDDING_CONFIG.dataCasamento),
    [],
  );

  useEffect(() => {
    const calculateTime = () => {
      const difference = weddingDate.getTime() - Date.now();
      const elapsed = Math.abs(difference);

      setIsMarried(difference <= 0);
      setTimeLeft({
        dias: Math.floor(elapsed / 86_400_000),
        horas: Math.floor((elapsed % 86_400_000) / 3_600_000),
        minutos: Math.floor((elapsed % 3_600_000) / 60_000),
        segundos: Math.floor((elapsed % 60_000) / 1_000),
      });
    };

    calculateTime();
    const timer = window.setInterval(calculateTime, 1_000);
    return () => window.clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="relative z-10 min-h-screen overflow-hidden px-5 pb-16 pt-10 md:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-6.5rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-[#ead8bd]/20 bg-[#1e1518]/80 shadow-[0_32px_100px_rgba(0,0,0,0.35)] md:grid-cols-[1.02fr_0.98fr] md:rounded-[3rem]">
        <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center md:items-start md:px-14 md:text-left lg:px-20">
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.36em] text-[#d7b27c] md:text-xs">
            Um convite para celebrar conosco
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[0.9] text-[#fffaf2] sm:text-6xl lg:text-8xl">
            Eliane <span className="font-cursive font-normal text-[#d7b27c]">&</span>
            <br /> Miguel
          </h1>
          <p className="mt-7 max-w-xl font-serif text-2xl italic leading-snug text-[#eadfd3] md:text-3xl">
            Amor, vida e um novo começo.
          </p>
          <div className="my-9 h-px w-20 bg-[#d7b27c]/70" />
          <p className="max-w-lg text-sm leading-7 text-[#d8ccc5] md:text-base">
            No dia em que Eliane celebra mais um ano de vida, nós também
            celebraremos o início de uma nova etapa da nossa história.
          </p>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#fffaf2] md:text-base">
            10 de outubro <span className="mx-2 text-[#d7b27c]">•</span> 11 horas
          </p>
        </div>

        <div className="relative min-h-[48vh] md:min-h-full">
          <Image
            src={WEDDING_CONFIG.fotoDestaque}
            alt="Eliane e Miguel brindando juntos"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1518]/55 via-transparent to-transparent md:bg-gradient-to-r md:from-[#1e1518]/35 md:to-transparent" />
          <div className="absolute bottom-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-white/15 bg-[#1a1114]/70 p-4 text-center backdrop-blur-md md:bottom-10 md:p-5">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d7b27c]">
              {isMarried ? "Celebrando nossa união há" : "Faltam"}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "dias", value: timeLeft.dias },
                { label: "horas", value: timeLeft.horas },
                { label: "min", value: timeLeft.minutos },
                { label: "seg", value: timeLeft.segundos },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block font-serif text-2xl font-semibold text-[#fffaf2] md:text-3xl">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[0.55rem] uppercase tracking-widest text-[#d8ccc5] md:text-[0.65rem]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center text-[#d7b27c] transition-colors hover:text-[#fffaf2]"
        aria-label="Ver detalhes do convite"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </button>
    </section>
  );
};

export default Hero;
