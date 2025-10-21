import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Target } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const taglines = [
    "LET'S NOT WAIT FOR THE CHANGE",
    "LET'S BE THE CHANGE",
    "ROTARACT CLUB OF ROYAL CITY BEZAWADA"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rotaract-red/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-rotaract-red/5 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rotaract-red/15 rounded-full blur-lg animate-float delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo with Glow Effect */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative inline-block">
              <img
                src={logoMain}
                alt="RAC RCB Logo"
                className="h-40 w-40 md:h-48 md:w-48 mx-auto animate-glow-pulse"
                style={{ filter: 'drop-shadow(0 0 30px hsl(var(--rotaract-red) / 0.5))' }}
              />
              <div className="absolute inset-0 bg-rotaract-red/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Animated Tagline with Split Effect */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center overflow-hidden px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-rotaract-white text-center">
              {taglines[currentText].split(' ').map((word, wordIndex) => (
                <span key={`${currentText}-${wordIndex}`} className="inline-block mr-2 whitespace-nowrap">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={`${currentText}-${wordIndex}-${charIndex}`}
                      className="inline-block animate-letter-bounce"
                      style={{
                        animationDelay: `${(wordIndex * 10 + charIndex) * 0.05}s`,
                        textShadow: '0 0 20px hsl(var(--rotaract-red) / 0.5)'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Empowering young leaders to create positive change in our community through service, fellowship, and professional development.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Button
              variant="hero"
              size="lg"
              className="min-w-48"
              onClick={() => scrollToSection("#volunteer")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join as Volunteer
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="min-w-48"
              onClick={() => scrollToSection("#projects")}
            >
              <Target className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rotaract-red mb-2">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rotaract-red mb-2">25+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rotaract-red mb-2">1000+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-rotaract-red hover:text-rotaract-white transition-colors p-2"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;