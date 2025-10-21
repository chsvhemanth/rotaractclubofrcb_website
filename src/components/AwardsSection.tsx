import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Medal, Crown, Target } from "lucide-react";

const AwardsSection = () => {
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

    const element = document.querySelector("#awards");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: "2024",
      title: "Outstanding Community Service Award",
      description: "Recognized for exceptional community impact through our literacy program",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      year: "2023",
      title: "Best Rotaract Club - District 3020",
      description: "Awarded for excellence in leadership and project implementation",
      icon: Crown,
      color: "text-rotaract-red"
    },
    {
      year: "2023",
      title: "Environmental Excellence Award",
      description: "Leading eco-friendly initiatives in Vijayawada region",
      icon: Target,
      color: "text-green-400"
    },
    {
      year: "2022",
      title: "Youth Leadership Recognition",
      description: "Developing next generation leaders through mentorship programs",
      icon: Star,
      color: "text-blue-400"
    },
    {
      year: "2022",
      title: "Community Impact Medal",
      description: "Reaching over 1000+ beneficiaries through various projects",
      icon: Medal,
      color: "text-purple-400"
    },
    {
      year: "2021",
      title: "Innovation in Service Award",
      description: "Pioneering digital solutions for community service delivery",
      icon: Award,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & <span className="text-rotaract-red">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for our dedication to service, leadership, and community impact
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-7xl mx-auto pb-8">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rotaract-red to-transparent"></div>

          {/* Achievement Cards */}
          <div className="relative overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-80"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 mb-8">
                    <div className={`w-12 h-12 bg-rotaract-red rounded-full border-4 border-background shadow-glow flex items-center justify-center ${
                      isVisible ? `animate-scale-in delay-${index * 100}` : 'opacity-0'
                    }`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Connecting Line */}
                    {index < achievements.length - 1 && (
                      <div className="absolute top-1/2 left-full w-24 h-0.5 bg-rotaract-red/30"></div>
                    )}
                  </div>

                  {/* Achievement Card */}
                  <Card
                    className={`w-full p-6 bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ${
                      isVisible ? `animate-fade-in-up delay-${index * 150}` : 'opacity-0'
                    }`}
                  >
                    <div className="text-center space-y-3">
                      <span className="inline-block text-sm font-bold text-rotaract-red bg-rotaract-red/10 px-4 py-1 rounded-full">
                        {achievement.year}
                      </span>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="text-muted-foreground">Awards Won</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <Star className="h-12 w-12 text-rotaract-red mx-auto mb-4" />
            <div className="text-3xl font-bold text-foreground mb-2">5</div>
            <div className="text-muted-foreground">Years Active</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <Medal className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-foreground mb-2">3</div>
            <div className="text-muted-foreground">District Awards</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <Crown className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Recognitions</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;