import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Numbers from "@/components/Numbers";
import Problem from "@/components/Problem";
import Inside from "@/components/Inside";
import HowItWorks from "@/components/HowItWorks";
import Limits from "@/components/Limits";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Numbers />
        <Problem />
        <Inside />
        <HowItWorks />
        <Limits />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
