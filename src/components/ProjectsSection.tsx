import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, GraduationCap, Leaf, Users, Calendar, MapPin, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
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

    const element = document.querySelector("#projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Digital Literacy Drive",
      description: "Empowering elderly citizens with essential digital skills for the modern world.",
      category: "ongoing",
      impact: "200+ Beneficiaries",
      location: "Vijayawada",
      duration: "6 months",
      image: "📱",
      icon: GraduationCap,
      tags: ["Education", "Technology", "Community"],
      status: "Active"
    },
    {
      id: 2,
      title: "Green Vijayawada Initiative",
      description: "Large-scale tree plantation and environmental awareness campaign.",
      category: "completed",
      impact: "500+ Trees Planted",
      location: "Vijayawada",
      duration: "3 months",
      image: "🌳",
      icon: Leaf,
      tags: ["Environment", "Sustainability"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Healthcare for All",
      description: "Free medical camps and health awareness programs in rural areas.",
      category: "ongoing",
      impact: "1000+ People Served",
      location: "Krishna District",
      duration: "Ongoing",
      image: "🏥",
      icon: Heart,
      tags: ["Healthcare", "Rural Development"],
      status: "Active"
    },
    {
      id: 4,
      title: "Youth Leadership Summit",
      description: "Annual conference bringing together young leaders from across the region.",
      category: "upcoming",
      impact: "300+ Expected Participants",
      location: "Vijayawada",
      duration: "3 days",
      image: "🎯",
      icon: Users,
      tags: ["Leadership", "Networking"],
      status: "Planning"
    },
    {
      id: 5,
      title: "Clean Water Project",
      description: "Installing water purification systems in underserved communities.",
      category: "completed",
      impact: "5 Villages Benefited",
      location: "Guntur District",
      duration: "4 months",
      image: "💧",
      icon: Heart,
      tags: ["Water", "Infrastructure"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Skill Development Program",
      description: "Vocational training for unemployed youth in collaboration with local industries.",
      category: "upcoming",
      impact: "100+ Youth Targeted",
      location: "Vijayawada",
      duration: "8 months",
      image: "🔧",
      icon: GraduationCap,
      tags: ["Skills", "Employment"],
      status: "Starting Soon"
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Planning": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Starting Soon": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-muted";
    }
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-rotaract-red">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a difference through impactful community initiatives and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-4 bg-background/50 p-2 rounded-lg border border-rotaract-red/20">
            {[
              { key: "all", label: "All Projects" },
              { key: "ongoing", label: "Ongoing" },
              { key: "completed", label: "Completed" },
              { key: "upcoming", label: "Upcoming" }
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={filter === tab.key ? "default" : "ghost"}
                onClick={() => setFilter(tab.key)}
                className={filter === tab.key ? "bg-rotaract-red hover:bg-rotaract-dark-red" : "hover:text-rotaract-red"}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`p-6 bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-500 group ${
                isVisible ? `animate-scale-in delay-${index * 100}` : 'opacity-0'
              }`}
            >
              {/* Project Image/Icon */}
              <div className="relative mb-6">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <Badge className={`absolute top-0 right-0 ${getStatusColor(project.status)}`}>
                  {project.status}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-rotaract-red transition-colors">
                    {project.title}
                  </h3>
                  <project.icon className="h-6 w-6 text-rotaract-red flex-shrink-0 ml-2" />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-rotaract-red" />
                    {project.impact}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-rotaract-red" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-rotaract-red" />
                    {project.duration}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-rotaract-red/30 text-rotaract-red hover:bg-rotaract-red/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="hero-outline"
                  className="w-full mt-4 group-hover:bg-rotaract-red/10"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-3xl font-bold text-rotaract-red mb-2">25+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-3xl font-bold text-rotaract-red mb-2">2000+</div>
            <div className="text-muted-foreground">Lives Impacted</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;