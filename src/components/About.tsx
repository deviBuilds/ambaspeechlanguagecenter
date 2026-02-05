import { Award, Heart, Users, GraduationCap } from "lucide-react";
import nipaPortrait from "@/assets/nipa-portrait.webp";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Master's Degree",
      description: "Communication Disorders",
    },
    {
      icon: Award,
      title: "ASHA Certified",
      description: "Board-certified member",
    },
    {
      icon: Users,
      title: "20 Years",
      description: "Clinical experience",
    },
    {
      icon: Heart,
      title: "Speak Out! Provider",
      description: "Licensed practitioner",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={nipaPortrait}
                alt="Nipa, Speech Language Pathologist"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-lg mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Hello! I'm Nipa
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Founder of Amba Speech and Language Center. I'm dedicated to empowering adults 
              facing communication and cognitive challenges due to conditions like Traumatic 
              Brain Injury, Parkinson's disease, Dementia, and Stroke.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              With expertise spanning acute care, rehabilitation, skilled nursing, outpatient, 
              and home health settings, I provide personalized, evidence-based therapy that 
              supports each client's unique journey.
            </p>

            {/* Tagline */}
            <blockquote className="text-xl md:text-2xl font-medium text-primary italic mb-10 pl-6 border-l-4 border-primary">
              "Helping you reconnect, rebuild, and communicate with confidence."
            </blockquote>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.title} className="bg-card p-5 rounded-xl border border-border">
                  <cred.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-lg">{cred.title}</h3>
                  <p className="text-muted-foreground">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
