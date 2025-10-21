import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Royal City Bezawada, Vijayawada",
      subInfo: "Krishna District, Andhra Pradesh 520008"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      subInfo: "Available Mon-Sat, 10:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@racrcb.org",
      subInfo: "We'll respond within 24 hours"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-500 hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-500 hover:text-pink-400" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-sky-500 hover:text-sky-400" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "text-blue-600 hover:text-blue-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-rotaract-red">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make a difference? Reach out to us and join our mission of positive change
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you want to volunteer, collaborate, or simply learn more about our initiatives, 
                we'd love to hear from you. Together, we can create the change we want to see.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300 ${
                    isVisible ? `animate-scale-in delay-${(index + 1) * 150}` : 'opacity-0'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-rotaract-red/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-rotaract-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.info}</p>
                      <p className="text-sm text-muted-foreground/70">{item.subInfo}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className={`${isVisible ? 'animate-fade-in-up delay-800' : 'opacity-0'}`}>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gradient-card border border-rotaract-red/20 rounded-lg hover:border-rotaract-red hover:shadow-glow transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className={`p-6 bg-gradient-card border-rotaract-red/20 ${isVisible ? 'animate-scale-in delay-1000' : 'opacity-0'}`}>
              <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center text-4xl">
                🗺️
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Interactive map coming soon
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <Card className="p-8 bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red resize-none"
                    placeholder="Tell us more about how we can help you or how you'd like to get involved..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;