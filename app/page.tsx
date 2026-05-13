"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Starfield from "@/components/1-starfield";
import Hero from "@/components/2-hero";
import QuickActions from "@/components/3-quickActions";
import InfoCards from "@/components/4-infoCards";
import Story from "@/components/5-story";
import Attire from "@/components/6-attire";
import Gallery from "@/components/7-gallery";
import Location from "@/components/8-location";
import GiftSection from "@/components/9-gifts";
import Footer from "@/components/10-footer";
import Container from "@/shared/container";
import Main from "@/shared/main";
import StartExperience from "@/shared/start-experience";

function HomeContent() {
  const [hasStarted, setHasStarted] = useState(false);
  const searchParams = useSearchParams();
  const isSpecial = searchParams.has('special');

  return (
    <Container>
      <Starfield />
      <StartExperience onStart={() => setHasStarted(true)} />

      {hasStarted && (
        <>
          <a 
            href="https://open.spotify.com/intl-pt/track/1dGxOpMQknNgkD5d9BCObF?si=a745fcb4ae2e4f18"
            target="_blank"
            rel="noreferrer"
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] px-6 py-2 rounded-full text-white text-[10px] md:text-sm font-medium tracking-wider uppercase animate-color-shift bg-[length:300%_300%] bg-gradient-to-r from-purple-600 via-blue-500 via-emerald-500 to-purple-600 shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform whitespace-nowrap"
          >
            Spotify: Meu Sonho - VICTIN (2024)
          </a>
          <div className="animate-fade-in fill-mode-forwards">
            <Hero isSpecial={isSpecial} />
            <Main>
              <QuickActions />
              <InfoCards />
              <Story />
              {isSpecial && <Attire />}
              <Gallery />
              <Location />
              <GiftSection />
            </Main>
            <Footer />
          </div>
        </>
      )}
    </Container>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
