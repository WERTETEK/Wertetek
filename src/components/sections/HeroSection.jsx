import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import HeroSectionImage from "/src/assets/images/hero-section-image.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-primary-foreground py-20 md:py-32"
    >
      <div className="absolute inset-0 opacity-10"></div>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Pioneering Solutions,{" "}
              <span className="text-accent-foreground/80">
                Transforming Industries
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Wertetek combines expertise in mechanical, electronics, software,
              construction, and design to deliver innovative and reliable
              solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              >
                <a href="#contact" className="flex items-center">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10"
              >
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="hidden md:block">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={HeroSectionImage}
                alt="Innovative Technology Showcase"
                className="w-full h-full object-cover rounded-lg"
                data-ai-hint="technology innovation"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
