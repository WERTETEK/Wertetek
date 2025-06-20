import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle } from "lucide-react";
import OverviewSectionImage from "/src/assets/images/overview-section-image.jpg";

const OverviewSection = () => {
  const overviewContent =
    "Wertetek offers a comprehensive suite of services, from mechanical and electronics engineering to cutting-edge web and app development, alongside expert construction and interior design. We are committed to innovation and excellence, delivering tailored solutions that drive success and transform industries. Our client-centric approach ensures we understand your unique needs and deliver impactful results.";

  const features = [
    "Innovative Mechanical & Electronics Solutions",
    "Custom Web & App Development",
    "Expert Construction & Interior Design",
    "Client-Centric Approach",
    "Quality and Precision Guaranteed",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={OverviewSectionImage}
                alt="Wertetek Team Collaboration"
                className="w-full h-full object-cover rounded-lg"
                data-ai-hint="collaboration technology"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                Innovate. Build. Transform. With Wertetek.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {overviewContent}
              </p>
              <ul className="space-y-3 mt-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 shrink-0 mt-1" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="#services">Explore Our Services</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
