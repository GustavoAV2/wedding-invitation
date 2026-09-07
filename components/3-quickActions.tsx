import { CalendarPlus, MapPinned } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

const QuickActions = () => {
  return (
    <section aria-label="Ações rápidas" className="grid gap-5 md:grid-cols-2">
      <a
        href="/event/convite.ics"
        download="casamento-eliane-miguel.ics"
        className="group flex items-center gap-5 rounded-3xl border border-[#d7b27c]/20 bg-[#d7b27c]/10 p-6 transition-all hover:-translate-y-1 hover:border-[#d7b27c]/45 hover:bg-[#d7b27c]/15 md:p-8"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d7b27c] text-[#201517]">
          <CalendarPlus size={24} />
        </span>
        <span>
          <strong className="block font-serif text-2xl text-[#fffaf2]">Guardar essa data</strong>
          <span className="mt-1 block text-sm leading-6 text-[#d8ccc5]">
            Adicione 10 de outubro à sua agenda.
          </span>
        </span>
      </a>

      <a
        href={WEDDING_CONFIG.evento.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-5 rounded-3xl border border-[#a65a67]/25 bg-[#a65a67]/10 p-6 transition-all hover:-translate-y-1 hover:border-[#a65a67]/55 hover:bg-[#a65a67]/15 md:p-8"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#a65a67] text-white">
          <MapPinned size={24} />
        </span>
        <span>
          <strong className="block font-serif text-2xl text-[#fffaf2]">Como chegar</strong>
          <span className="mt-1 block text-sm leading-6 text-[#d8ccc5]">
            Abra a localização do Edifício Paladium.
          </span>
        </span>
      </a>
    </section>
  );
};

export default QuickActions;
