"use client";

import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';

interface StartExperienceProps {
  onStart: () => void;
}

export default function StartExperience({ onStart }: StartExperienceProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
    onStart();
  };

  return (
    <>
      <audio ref={audioRef} src="/music/audio.mp3" loop />
      {!hasStarted && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1b1114]/80 px-6 backdrop-blur-md transition-all duration-1000">
          <button 
            onClick={startExperience}
            className="group relative flex flex-col items-center gap-12 cursor-pointer"
          >
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 scale-150 rounded-full bg-[#a65a67]/25 blur-xl animate-pulse" />
              <div className="absolute inset-0 scale-200 rounded-full bg-[#d7b27c]/10 blur-2xl animate-pulse delay-700" />
              
              {/* Main Button */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#ead8bd]/30 bg-white/5 shadow-[0_0_35px_rgba(215,178,124,0.22)] backdrop-blur-xl transition-all duration-500 group-hover:bg-white/10 group-active:scale-95 md:h-32 md:w-32">
                <Heart className="h-10 w-10 text-[#ead8bd] transition-transform group-hover:scale-110 md:h-14 md:w-14" strokeWidth={1.3} />
              </div>
            </div>
            <span className="text-center text-sm font-light uppercase tracking-[0.26em] text-[#eadfd3] md:text-base">
              <div className="mb-3 font-serif text-2xl normal-case tracking-normal text-[#fffaf2]">Eliane &amp; Miguel</div>
              <div>Toque para abrir o convite</div>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
