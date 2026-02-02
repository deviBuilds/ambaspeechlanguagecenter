import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-primary-foreground">
                  <circle cx="20" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 28 Q20 20 28 28" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-semibold">Amba Speech Center</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Personalized telehealth speech therapy for adults in Washington State.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+14252877689" 
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (425) 287-7689
              </a>
              <a 
                href="mailto:info@ambaspeechcenter.com" 
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@ambaspeechcenter.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>© {new Date().getFullYear()} Amba Speech and Language Center. All rights reserved.</p>
          <p className="mt-2 text-sm">
            ASHA Certified | Licensed Speak Out! Provider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
