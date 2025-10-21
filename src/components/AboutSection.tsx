import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Award } from "lucide-react";
import rotaractBranding from "@/assets/rotaract-branding.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.querySelector("#about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Service Above Self",
      description: "We believe in putting the needs of our community first, creating lasting positive impact."
    },
    {
      icon: Users,
      title: "Fellowship",
      description: "Building lifelong friendships and professional networks through shared service and values."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Part of the worldwide Rotaract movement, connecting with clubs across the globe."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to excellence in everything we do, from projects to personal development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-rotaract-red">RAC RCB</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary mb-6"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                The Rotaract Club of Royal City Bezawada stands as a beacon of youth leadership and 
                community service in Vijayawada. Founded with the vision of empowering young professionals 
                and students, we are part of the global Rotaract movement under Rotary International.
              </p>
              <p>
                Our club brings together passionate individuals aged 18-30 who are committed to making 
                a difference in their community while developing leadership skills and building lasting 
                professional relationships.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-gradient-card p-6 rounded-lg border border-rotaract-red/20">
                <h3 className="text-xl font-semibold text-rotaract-red mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide opportunities for young people to enhance leadership and professional skills, 
                  to address community and international needs, and to promote better relations between 
                  all people worldwide.
                </p>
              </div>

              <div className="bg-gradient-card p-6 rounded-lg border border-rotaract-red/20">
                <h3 className="text-xl font-semibold text-rotaract-red mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading youth organization in creating positive change and developing 
                  tomorrow's leaders while fostering peace and understanding in our global community.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Values */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            {/* Rotaract Branding Image */}
            <div className="text-center">
              <img
                src={rotaractBranding}
                alt="Rotaract Branding"
                className="max-w-md mx-auto h-auto opacity-90"
              />
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red transition-all duration-300 hover:shadow-glow ${
                    isVisible ? `animate-scale-in delay-${(index + 1) * 100}` : 'opacity-0'
                  }`}
                >
                  <value.icon className="h-8 w-8 text-rotaract-red mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;