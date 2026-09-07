import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

const Location = () => {
  const { evento } = WEDDING_CONFIG;

  return (
    <section className="glass overflow-hidden rounded-[2.5rem]">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b89466]">Onde nos encontraremos</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#fffaf2] md:text-5xl">{evento.local}</h2>
          <p className="mt-5 leading-7 text-[#cfc2bb]">
            Um cenário em Blumenau para reunirmos família e amigos e começarmos, juntos, esta nova etapa.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div className="flex gap-4">
              <CalendarDays className="mt-0.5 shrink-0 text-[#d7b27c]" size={20} />
              <div><dt className="font-semibold text-[#fffaf2]">Data</dt><dd className="mt-1 text-[#cfc2bb]">{evento.diaDaSemana}, {evento.dataPorExtenso}</dd></div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-0.5 shrink-0 text-[#d7b27c]" size={20} />
              <div><dt className="font-semibold text-[#fffaf2]">Horário</dt><dd className="mt-1 text-[#cfc2bb]">Às {evento.horario}</dd></div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 shrink-0 text-[#d7b27c]" size={20} />
              <div><dt className="font-semibold text-[#fffaf2]">Endereço</dt><dd className="mt-1 text-[#cfc2bb]">{evento.endereco}</dd></div>
            </div>
          </dl>

          <a href={evento.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d7b27c] px-6 py-3.5 text-sm font-bold text-[#241719] transition-colors hover:bg-[#ead8bd] md:w-fit">
            <MapPin size={18} /> Abrir no Google Maps
          </a>
        </div>

        <div className="min-h-[25rem] border-t border-[#ead8bd]/10 md:min-h-[34rem] md:border-l md:border-t-0">
          <iframe
            src={evento.mapsEmbedUrl}
            title="Mapa do Edifício Paladium, em Blumenau"
            width="100%"
            height="100%"
            className="h-full min-h-[25rem] w-full border-0 grayscale-[20%] contrast-[95%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
