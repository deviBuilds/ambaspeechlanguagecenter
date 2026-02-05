import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John J.",
      condition: "Parkinson's Client",
      quote: "Nipa's techniques are very positively reinforcing, and they are very supportive and there is no judgement only multi-faceted ways. In a short amount of time she helped me get my voice back.",
    },
    {
      name: "Connie E.",
      condition: "Parkinson's Client",
      quote: "Nipa personalized my therapy to reflect my lifestyle and my personal needs for communication. She spent time evaluating my deficits and then she applied personalized techniques. I was able to improve and make extensive progress, I am very grateful for that.",
    },
    {
      name: "Debbie H.",
      condition: "Voice Client",
      quote: "At first I thought therapy would be dry and uninteresting but no, it was very informative and very helpful. I saw immediate results. I would recommend Nipa to anyone with Parkinson's or speech difficulty. Speech sessions with her are fun and informative.",
    },
    {
      name: "Regina B.",
      condition: "TBI Client",
      quote: "Therapy with Nipa has helped me increase my confidence, which was important because I was embarrassed and self-conscious at first after my concussion. She gave me tools to cope with and understand my condition.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-lg mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Dedicated to delivering exceptional service, every time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
