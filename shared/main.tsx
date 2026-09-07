import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Main(props: Props) {
  return (
    <main className="relative z-10 mx-auto max-w-6xl space-y-12 px-5 py-20 md:space-y-20 md:px-8 md:py-28">
      {props.children}
    </main>
  );
}
