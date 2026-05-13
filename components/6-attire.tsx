"use client";

import React from 'react';
import { Shirt, Sparkles, UserCheck } from 'lucide-react';

const Attire = () => {
  return (
    <section className="relative overflow-hidden glass rounded-[3rem] p-8 md:p-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#4169e1]/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shirt className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(65,105,225,0.6)]" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-100 mb-6">
          Traje dos Padrinhos
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 font-light">
          Para celebrarmos este momento em harmonia, preparamos uma sugestão especial de cores para nossos queridos padrinhos e madrinhas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-2">
              <UserCheck className="w-6 h-6" />
              Nossa Cor: Royal Blue
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              O <span className="text-blue-400 font-bold">Royal Blue</span> foi escolhido para simbolizar a lealdade e a confiança que temos em cada um de vocês que caminhará ao nosso lado.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div 
                className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl shadow-blue-500/40"
                style={{ backgroundColor: '#4169e1' }}
              />
              <span className="text-sm font-mono text-slate-400">#4169e1</span>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 mb-1">Madrinhas</h4>
                <p className="text-slate-400 text-sm">Vestidos longos no tom Royal Blue, trazendo elegância e unidade ao altar.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 mb-1">Padrinhos</h4>
                <p className="text-slate-400 text-sm">Terno escuro com gravata no tom Royal Blue para harmonizar com as madrinhas.</p>
              </div>
            </div>

            <p className="text-sm italic text-slate-500 mt-4 text-center md:text-left">
              * A cor é uma sugestão para que possamos criar uma estética visual linda em nossas fotos, mas o mais importante é sua presença e conforto!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attire;
