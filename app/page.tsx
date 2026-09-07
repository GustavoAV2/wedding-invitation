"use client";

import { useState } from 'react';
import Starfield from "@/components/1-starfield";
import Hero from "@/components/2-hero";
import QuickActions from "@/components/3-quickActions";
import InfoCards from "@/components/4-infoCards";
import Story from "@/components/5-story";
import Gallery from "@/components/7-gallery";
import Location from "@/components/8-location";
import GiftSection from "@/components/9-gifts";
import Footer from "@/components/10-footer";
import Container from "@/shared/container";
import Main from "@/shared/main";
import StartExperience from "@/shared/start-experience";

function HomeContent() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Container>
      <Starfield />
      <StartExperience onStart={() => setHasStarted(true)} />

      {hasStarted && (
        <>
          <div>
            <Hero />
            <Main>
              <QuickActions />
              <InfoCards />
              <Story />
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
  return <HomeContent />;
}
