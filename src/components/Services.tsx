import { Brain, Mic, Activity, Heart, Lightbulb, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Parkinson's Therapy",
      description: "As a licensed Speak Out! provider, I use proven exercises to strengthen the voice and improve speech, helping you communicate better and stay engaged in everyday conversations.",
    },
    {
      icon: Heart,
      title: "Swallowing Therapy",
      description: "Evidence-based swallowing therapy to improve safety and comfort with eating and drinking, helping you enjoy meals with greater confidence and quality of life.",
    },
    {
      icon: Mic,
      title: "Voice Disorders",
      description: "Personalized treatment for hoarseness, vocal strain, and voice loss. Our therapy restores and strengthens your vocal function for clear, confident speaking.",
    },
    {
      icon: Brain,
      title: "Stroke Recovery",
      description: "Evidence-based therapy to improve understanding, word-finding, and everyday communication after stroke or brain injury.",
    },
    {
      icon: Lightbulb,
      title: "Memory & Cognition",
      description: "Enhance memory, attention, and problem-solving skills with personalized strategies that support independence and make everyday tasks easier.",
    },
    {
      icon: Languages,
      title: "Accent Modification",
      description: "Fluent in five languages, I understand how accent impacts confidence. Our services help you communicate more clearly in professional and personal settings.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Can Help
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive speech therapy services tailored to your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
