import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.webp";
import ashaBadge from "@/assets/badges/asha-ccc-slp.webp";
import pvpBadge from "@/assets/badges/pvp-circle-of-intent.png";
import credlyBadge from "@/assets/badges/credly-lpaa.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center overflow-hidden border border-background/30">
                <img
                  src={logo}
                  alt="Amba Speech Center logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
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

        {/* Certification Badges */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {/* ASHA Badge */}
            <a
              href="https://www.asha.org/certification/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-16 md:h-20 transition-opacity hover:opacity-80"
            >
              <img
                src={ashaBadge}
                alt="ASHA Certified CCC-SLP"
                className="h-full w-auto object-contain brightness-0 invert opacity-90"
              />
            </a>

            {/* Credly LPAA Badge */}
            <a
              href="https://www.credly.com/badges/9518017f-7c66-4fe8-9abe-0ec2da2f851b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-16 md:h-20 transition-opacity hover:opacity-80"
            >
              <img
                src={credlyBadge}
                alt="Person-Centered Care: LPAA Practice Course"
                className="h-full w-auto object-contain"
              />
            </a>

            {/* PVP Circle of Intent Badge */}
            <a
              href="https://www.parkinsonvoiceproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-16 md:h-20 transition-opacity hover:opacity-80"
            >
              <img
                src={pvpBadge}
                alt="Parkinson Voice Project - Circle of Intent"
                className="h-full w-auto object-contain"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-background/60">
            © {new Date().getFullYear()} Amba Speech and Language Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
