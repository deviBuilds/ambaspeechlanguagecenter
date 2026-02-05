import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (425) 287-7689",
      link: "tel:+14252877689",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@ambaspeechcenter.com",
      link: "mailto:info@ambaspeechcenter.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Washington State",
      subtitle: " Services",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Flexible Scheduling",
      subtitle: "Book your consultation",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary-foreground/80 font-semibold text-lg mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Book a free 20-minute consultation to discuss your needs and learn how 
              we can help you or your loved ones communicate with confidence.
            </p>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed mb-8"><b>
            We accept Medicare Part B, Regence , Premera and most major insurances and also offer Super Bills as needed.
            </b>
            </p>
            
            <a href="tel:+14252877689">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 gap-2 text-xl px-8 py-7"
              >
                <Phone className="w-6 h-6" />
                Call Now: (425) 287-7689
              </Button>
            </a>
          </div>

          {/* Right - Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <Card 
                key={info.title} 
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <info.icon className="w-12 h-12 text-primary-foreground mb-4" />
                  <h3 className="font-semibold text-primary-foreground text-xl mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-primary-foreground/90 hover:text-primary-foreground text-2xl underline-offset-4 hover:underline break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <>
                      <p className="text-primary-foreground/90 text-2xl">{info.value}</p>
                      {info.subtitle && (
                        <p className="text-primary-foreground/70 text-lg">{info.subtitle}</p>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
