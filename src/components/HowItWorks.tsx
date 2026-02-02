import { CalendarCheck, ClipboardList, FileText, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CalendarCheck,
      step: "01",
      title: "Book a Free Consultation",
      description: "Start with a no-cost, personalized 20-minute meeting to discuss your needs.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Assess Your Needs",
      description: "We evaluate your unique communication and cognitive goals thoroughly.",
    },
    {
      icon: FileText,
      step: "03",
      title: "Create a Tailored Plan",
      description: "Develop a personalized care plan designed specifically for you.",
    },
    {
      icon: Sparkles,
      step: "04",
      title: "Start Therapy",
      description: "Begin your personalized program to improve skills and independence.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to Better Communication
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is simple. Here's how we help you on your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
