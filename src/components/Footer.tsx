import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ExternalLink
} from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Awards", href: "#awards" },
    { label: "Members", href: "#members" },
  ];

  const serviceLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Join as Volunteer", href: "#volunteer" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-500" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-rotaract-red/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoMain}
                alt="RAC RCB Logo"
                className="h-12 w-12 animate-glow-pulse"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">RAC RCB</h3>
                <p className="text-sm text-muted-foreground">Royal City Bezawada</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering young leaders to create positive change in our community through 
              service, fellowship, and professional development. Join us in making a difference.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-rotaract-red flex-shrink-0" />
                <span className="text-sm">Royal City Bezawada, Vijayawada, Krishna District</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-rotaract-red flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-rotaract-red flex-shrink-0" />
                <span className="text-sm">info@racrcb.org</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gradient-card border border-rotaract-red/20 rounded-lg hover:border-rotaract-red hover:shadow-glow transition-all duration-300 text-muted-foreground ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-rotaract-red transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rotaract-red transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-rotaract-red transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rotaract-red transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Card className="mt-6 p-4 bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
              <h5 className="font-semibold text-foreground mb-2">Ready to Join?</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Become part of our mission to create positive change
              </p>
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection("#volunteer")}
              >
                Join Now
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-rotaract-red/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-rotaract-red" />
              <span>by RAC RCB</span>
            </div>

            <div className="text-center text-muted-foreground text-sm">
              <p>&copy; 2024 Rotaract Club of Royal City Bezawada. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-rotaract-red transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-rotaract-red transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Developer Credit & Rotary International Recognition */}
          <div className="text-center mt-6 pt-6 border-t border-rotaract-red/10 space-y-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/developer'}
              className="border-rotaract-red/30 hover:border-rotaract-red hover:bg-rotaract-red/10 transition-all duration-300"
            >
              <Heart className="h-4 w-4 mr-2 text-rotaract-red" />
              Meet the Developer
            </Button>
            <p className="text-xs text-muted-foreground">
              Proudly affiliated with <span className="text-rotaract-red font-semibold">Rotary International</span> • District 3020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;