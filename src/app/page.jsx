import Header from "@components/header/Header";
import Contact from "@components/contact/Contact";
import Footer from "@components/footer/Footer";
import Hero from "@components/hero/Hero";
import Services from "@components/services/WhatIDo";
import Testimonial from "@components/testimonial/Testimonial";
import Awards from "@/components/awards/Awards";
import RecentWork from "@/components/portfolio/RecentWork";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Services />
      <RecentWork />
      <Awards />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
