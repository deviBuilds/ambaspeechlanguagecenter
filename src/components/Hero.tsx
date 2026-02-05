import { Phone, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroForest from "@/assets/hero-forest.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroForest} alt="Peaceful forest path" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-base font-medium mb-8">
            <Video className="w-5 h-5" />
             Speech Therapy in Washington
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Reclaim Your Confidence,{" "}
            <span className="text-primary">Reconnect with Life</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Personalized speech therapy for Stroke, Parkinson's, Dementia and Brain Injury patients. 
            Get expert care from the comfort of your home.
          </p>

          {/* Key Benefits */}
          {/* <div className="flex flex-wrap gap-4 mb-10">
            {["No Driving Required", "20 Years Experience", "ASHA Certified"].map(benefit => <div key={benefit} className="flex items-center gap-2 text-foreground text-lg">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {benefit}
              </div>)}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+14252877689">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-8 py-6">
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg px-8 py-6">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Phone Number */}
          <p className="mt-8 text-lg text-muted-foreground">
            Call us directly: <a href="tel:+14252877689" className="text-primary font-semibold hover:underline">+1 (425) 287-7689</a>
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-2xl font-medium text-foreground">20</p>
              <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-2xl font-medium text-foreground">ASHA</p>
              <p className="mt-1 text-sm text-muted-foreground">Board Certified</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-2xl font-medium text-foreground">Speak Out! Provider</p>
              <p className="mt-1 text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-2xl font-medium text-foreground">WA</p>
              <p className="mt-1 text-sm text-muted-foreground">Licensed States</p>
            </div>

          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
