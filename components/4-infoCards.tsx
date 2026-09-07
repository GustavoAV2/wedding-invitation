import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { WEDDING_CONFIG } from "@/config/wedding";

const details = [
  {
    icon: CalendarDays,
    eyebrow: "A data",
    title: "10 de outubro",
    description: "Sábado, em um dia que já nasce cheio de significado.",
  },
  {
    icon: Clock3,
    eyebrow: "O horário",
    title: WEDDING_CONFIG.evento.horario,
    description: "Esperamos você para celebrar conosco desde o início.",
  },
  {
    icon: MapPin,
    eyebrow: "O lugar",
    title: WEDDING_CONFIG.evento.local,
    description: "Rua Joinville, nº 70, em Blumenau.",
  },
];

const InfoCards = () => {
  return (
    <section className="grid gap-5 md:grid-cols-3" aria-label="Detalhes do casamento">
      {details.map(({ icon: Icon, eyebrow, title, description }) => (
        <article key={eyebrow} className="glass rounded-[2rem] p-7 text-center md:p-9">
          <Icon className="mx-auto mb-5 text-[#d7b27c]" size={30} strokeWidth={1.5} />
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#b89466]">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#fffaf2]">{title}</h2>
          <p className="mt-4 text-sm leading-6 text-[#cfc2bb]">{description}</p>
        </article>
      ))}
    </section>
  );
};

export default InfoCards;
