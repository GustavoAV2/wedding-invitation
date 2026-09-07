import { CakeSlice, Heart, Sparkles } from "lucide-react";

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

        <div className="mx-auto mt-9 max-w-3xl space-y-6 text-base leading-8 text-[#59484b] md:text-lg">
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

        <div className="mx-auto my-10 flex max-w-md items-center gap-4 text-[#b88d59]">
          <span className="h-px flex-1 bg-current opacity-40" />
          <Sparkles size={18} />
          <span className="h-px flex-1 bg-current opacity-40" />
        </div>

        <p className="font-serif text-2xl italic leading-relaxed text-[#6f3440] md:text-3xl">
          “Venha celebrar o amor, a vida e esse momento tão especial conosco.”
        </p>
      </div>
    </section>
  );
};

export default Story;
