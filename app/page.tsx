import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approche } from "@/components/Approche";
import { Services } from "@/components/Services";
import { TypesProjets } from "@/components/TypesProjets";
import { Methode } from "@/components/Methode";
import { Reseau } from "@/components/Reseau";
import { Projets } from "@/components/Projets";
import { Temoignages } from "@/components/Temoignages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Approche />
        <Services />
        <TypesProjets />
        <Methode />
        <Reseau />
        <Projets />
        <Temoignages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
