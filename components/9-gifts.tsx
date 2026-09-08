import { HeartHandshake } from "lucide-react";

const GiftSection = () => {
  return (
    <section className="px-3 py-8 text-center md:py-14">
      <HeartHandshake className="mx-auto text-[#d7b27c]" size={34} strokeWidth={1.35} />
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#b89466]">O que torna esse dia completo</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#fffaf2] md:text-5xl">
        Dividir essa alegria com quem amamos
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-8 text-[#cfc2bb]">
        Sua presença, seu abraço e o carinho de celebrar ao nosso lado são o maior presente que poderíamos receber.
      </p>
    </section>
  );
};

export default GiftSection;
