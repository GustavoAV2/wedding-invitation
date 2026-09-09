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
    { src: withBasePath("/images/eliane-miguel-15.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-04.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-10.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-01.jpeg"), alt: "Eliane e Miguel em um momento especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-19.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-06.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-09.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-14.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-02.jpeg"), alt: "Eliane e Miguel celebrando juntos", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-20.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-07.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-22.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-05.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-17.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-03.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-12.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-21.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-11.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-16.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-13.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
    { src: withBasePath("/images/eliane-miguel-08.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "retrato" },
    { src: withBasePath("/images/eliane-miguel-18.jpeg"), alt: "Eliane e Miguel em uma lembrança especial", formato: "paisagem" },
  ] as const,
  fotoDestaque: withBasePath("/images/eliane-miguel-04.jpeg"),
};
