"use client";

import React, { useState } from 'react';
import { Heart, CreditCard, QrCode, Copy, Check, ChevronRight } from 'lucide-react';

const GiftSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "386b6249-5f19-4fc4-b59a-b81b948c849b";

  const creditCardOptions = [
    { label: "Sorvete em Casal", value: "R$ 20,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-1HOVDrLEZT-20,00" },
    { label: "Pastel com Garapa", value: "R$ 50,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-2Yn0JetSKX-50,00" },
    { label: "Jantar a Dois", value: "R$ 100,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-2Ymyighmk1-100,00" },
    { label: "Um Churasco Top", value: "R$ 150,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-3qBW0nQjyz-150,00" },
    { label: "Passeio do Casal", value: "R$ 300,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-LHZOI83xow-300,00" },
    { label: "Cota Pro Enxoval", value: "R$ 500,00", link: "https://link.infinitepay.io/pastel00prosa/VC1D-IosATv7ReP-500,00" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex p-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-pulse">
          <Heart className="w-8 h-8 text-purple-400 fill-purple-400/20" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-100">
          Presenteie o Casal
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Sua presença é o nosso maior presente! Mas, se você desejar nos agraciar com um gesto extra de carinho para o início da nossa vida a dois, ficaremos imensamente gratos. Cada detalhe da nossa jornada é mais especial com o seu apoio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pix Option */}
          <div className="glass p-8 rounded-3xl border-purple-500/30 hover:border-purple-500/50 transition-all group flex flex-col h-full">
            <QrCode className="w-12 h-12 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-slate-100">Pix</h3>
            <p className="text-slate-400 mb-6 flex-grow">Para quem deseja presentear com qualquer valor de forma rápida e prática.</p>
            <p className="text-slate-400 mb-6 flex-grow">Copie a chave Pix e cole no aplicativo do seu banco para presentear diretamente o casal.</p>
            
            <div className="space-y-4 mt-auto">
              <p className="text-slate-400 text-sm italic">Chave Pix (Aleatória):</p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-purple-300 text-xs break-all mb-4">
                {pixKey}
              </div>
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 rounded-xl border border-purple-500/30 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={18} /> Copiado!
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copiar Chave Pix
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card Option */}
          <div className="glass p-8 rounded-3xl border-blue-500/30 hover:border-blue-500/50 transition-all group flex flex-col h-full">
            <div className="mb-6">
              <CreditCard className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Cartão de Crédito</h3>
              <p className="text-slate-400 mb-6">Selecione uma das opções abaixo para presentear via cartão em ambiente seguro:</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {creditCardOptions.map((option) => (
                <a 
                  key={option.value}
                  href={option.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 text-slate-300 rounded-xl transition-all group/btn"
                >
                  <div className="text-left">
                    <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{option.value}</p>
                    <p className="text-sm font-medium">{option.label}</p>
                  </div>
                  <ChevronRight size={14} className="text-slate-500 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default GiftSection;
