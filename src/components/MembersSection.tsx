import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Users, Crown, Target, Briefcase } from "lucide-react";

const MembersSection = () => {
  const [currentMember, setCurrentMember] = useState(0);
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

    const element = document.querySelector("#members");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const boardMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "President",
      bio: "Leading with vision and passion for community service. Committed to making RAC RCB the most impactful youth organization in the region.",
      avatar: "👩‍💼",
      badge: Crown,
      primaryColor: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      glowColor: "hover:shadow-purple-500/50"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Vice President",
      bio: "Passionate about youth development and social change. Working to expand our impact through innovative project management.",
      avatar: "👨‍💼",
      badge: Target,
      primaryColor: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      glowColor: "hover:shadow-blue-500/50"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Secretary",
      bio: "Organizing excellence and maintaining seamless communication. Ensuring every member's voice is heard and valued.",
      avatar: "👩‍💻",
      badge: Briefcase,
      primaryColor: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      glowColor: "hover:shadow-green-500/50"
    },
    {
      id: 4,
      name: "Arjun Reddy",
      role: "Treasurer",
      bio: "Managing resources efficiently to maximize our community impact. Ensuring transparency and sustainability in all projects.",
      avatar: "👨‍💻",
      badge: Briefcase,
      primaryColor: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      glowColor: "hover:shadow-orange-500/50"
    },
    {
      id: 5,
      name: "Ananya Singh",
      role: "Project Director",
      bio: "Driving innovative community projects that create lasting change. Focused on sustainable development and social impact.",
      avatar: "👩‍🔬",
      badge: Target,
      primaryColor: "from-yellow-500 to-amber-500",
      borderColor: "border-yellow-500/30",
      glowColor: "hover:shadow-yellow-500/50"
    }
  ];

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % boardMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + boardMembers.length) % boardMembers.length);
  };

  const member = boardMembers[currentMember];

  return (
    <section id="members" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-rotaract-red">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate leaders driving our mission and inspiring positive change
          </p>
        </div>

        {/* Featured Member Showcase */}
        <div className={`mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Card className={`relative overflow-hidden bg-gradient-card border-2 ${member.borderColor} ${member.glowColor} transition-all duration-500 hover:shadow-2xl`}>
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-12">
              {/* Left Side - Member Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl md:text-7xl">{member.avatar}</div>
                  <div className="flex-1">
                    <Badge className={`bg-gradient-to-r ${member.primaryColor} text-white border-0 mb-2`}>
                      <member.badge className="h-4 w-4 mr-1" />
                      {member.role}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-2">
                  {boardMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMember(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentMember 
                          ? 'w-8 bg-gradient-to-r ' + member.primaryColor
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Member Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {boardMembers.map((m, index) => (
                  <Card
                    key={m.id}
                    onClick={() => setCurrentMember(index)}
                    className={`p-4 cursor-pointer text-center bg-gradient-card border-2 transition-all duration-300 ${
                      index === currentMember
                        ? `${m.borderColor} shadow-lg scale-105`
                        : 'border-transparent hover:border-rotaract-red/30 hover:scale-105'
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl mb-2">{m.avatar}</div>
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1 line-clamp-1">
                      {m.name}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{m.role}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:block">
              <Button
                variant="hero-outline"
                size="icon"
                onClick={prevMember}
                className="rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden lg:block">
              <Button
                variant="hero-outline"
                size="icon"
                onClick={nextMember}
                className="rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Card>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <Button variant="hero-outline" size="icon" onClick={prevMember}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="icon" onClick={nextMember}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Club Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Card className="p-4 md:p-6 text-center bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-rotaract-red mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Active Members</div>
          </Card>
          <Card className="p-4 md:p-6 text-center bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300">
            <Crown className="h-8 w-8 md:h-10 md:w-10 text-rotaract-red mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">5</div>
            <div className="text-xs md:text-sm text-muted-foreground">Board Members</div>
          </Card>
          <Card className="p-4 md:p-6 text-center bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300">
            <Target className="h-8 w-8 md:h-10 md:w-10 text-rotaract-red mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">10</div>
            <div className="text-xs md:text-sm text-muted-foreground">Team Leads</div>
          </Card>
          <Card className="p-4 md:p-6 text-center bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300">
            <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-rotaract-red mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">6</div>
            <div className="text-xs md:text-sm text-muted-foreground">Committees</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;