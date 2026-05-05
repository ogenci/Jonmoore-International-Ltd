import { Nav } from "@/components/home/Nav";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Awards } from "@/components/home/Awards";
import { CEO } from "@/components/home/CEO";
import { PainSolution } from "@/components/home/PainSolution";
import { Capabilities } from "@/components/home/Capabilities";
import { Stats } from "@/components/home/Stats";
import { SignatureProject } from "@/components/home/SignatureProject";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";
import { MobileStickyCTA } from "@/components/home/MobileStickyCTA";
import { GSAPReveal } from "@/components/home/GSAPReveal";
import { CustomCursor } from "@/components/home/CustomCursor";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20">
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <GSAPReveal>
          <Marquee />
        </GSAPReveal>
        <GSAPReveal y={40} delay={0.1}>
          <Awards />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <CEO />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <PainSolution />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <Capabilities />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <Stats />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <SignatureProject />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <Process />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <Testimonials />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <FAQ />
        </GSAPReveal>
        <GSAPReveal y={40}>
          <FinalCTA />
        </GSAPReveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
