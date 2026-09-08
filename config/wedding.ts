export const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const WEDDING_CONFIG = {
  casal: {
    noiva: "Eliane",
    noivo: "Miguel",
    nomesCompletos: "Eliane Antunes dos Santos & Miguel Diaz",
  },
  dataCasamento: "2026-10-10T11:00:00-03:00",
  evento: {
    dataPorExtenso: "10 de outubro de 2026",
    diaDaSemana: "Sábado",
    horario: "11 horas",
    local: "Edifício Paladium",
    endereco: "Rua Joinville, nº 70 — Blumenau, SC",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Joinville%2C%2070%2C%20Blumenau%2C%20SC",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Rua%20Joinville%2C%2070%2C%20Blumenau%2C%20SC&output=embed",
  },
  fotos: [
    {
      src: withBasePath("/images/eliane-miguel-01.jpeg"),
      alt: "Eliane e Miguel em um momento especial",
      formato: "retrato",
    },
    {
      src: withBasePath("/images/eliane-miguel-04.jpeg"),
      alt: "Eliane e Miguel celebrando juntos",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.37.jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.37 (1).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.37 (2).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.38.jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.38 (1).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.38 (2).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.39.jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.39 (1).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.39 (2).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
    {
      src: withBasePath("/images/WhatsApp Image 2026-09-07 at 20.02.39 (3).jpeg"),
      alt: "Eliane e Miguel em uma lembrança especial",
      formato: "paisagem",
    },
  ] as const,
  fotoDestaque: withBasePath("/images/capa_convite_abertrura.jpeg"),
};
