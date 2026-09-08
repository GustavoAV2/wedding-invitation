import Image from "next/image";
import { CakeSlice, Heart } from "lucide-react";
import { withBasePath } from "@/config/wedding";

const Story = () => {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#ead8bd]/15 bg-[#f6efe7] px-6 py-14 text-[#2b1d20] md:px-16 md:py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#a65a67]/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-7 flex items-center justify-center gap-4 text-[#9b4c5b]">
          <CakeSlice size={24} strokeWidth={1.5} />
          <span className="h-px w-10 bg-[#b88d59]/50" />
          <Heart size={24} strokeWidth={1.5} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b6a42]">
          Um dia, dois motivos para celebrar
        </p>
        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">
          Quando a vida e o amor escolhem a mesma data
        </h2>

        <div className="mx-auto mt-9 max-w-3xl space-y-6 text-[1.0625rem] leading-8 text-[#59484b] md:text-lg">
          <p>
            Escolhemos um dia muito especial para celebrar o nosso amor. No dia
            10 de outubro, enquanto Eliane agradece por mais um ano de vida,
            também celebraremos o início de uma nova etapa da nossa história: a
            nossa união.
          </p>
          <p>
            Queremos dividir essa alegria com nossa família e com as pessoas que
            amamos — porque momentos assim ficam ainda mais bonitos quando são
            vividos juntos.
          </p>
        </div>

        <div className="relative mx-auto my-10 aspect-[3/4] w-[min(68vw,16rem)] overflow-hidden rounded-[2rem] border border-[#b88d59]/30 bg-[#ead8bd] shadow-[0_1.25rem_3rem_rgba(76,35,43,0.18)]">
          <Image
            src={withBasePath("/images/eliane-miguel-anel.jpeg")}
            alt="As alianças de Eliane e Miguel"
            fill
            sizes="(max-width: 768px) 68vw, 256px"
            className="object-cover"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3b1f26]/10 via-transparent to-white/10" />
        </div>

        <p className="font-serif text-2xl italic leading-relaxed text-[#6f3440] md:text-3xl">
          “Venha celebrar o amor, a vida e esse momento tão especial conosco.”
        </p>
      </div>
    </section>
  );
};

export default Story;
