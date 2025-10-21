import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, Code2, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Developer = () => {
  const navigate = useNavigate();

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", 
    "UI/UX Design", "Full-Stack Development", "Web3"
  ];

  const achievements = [
    { icon: Code2, label: "10+ Projects Delivered", color: "text-rotaract-red" },
    { icon: Users, label: "Community Leader", color: "text-rotaract-red" },
    { icon: Award, label: "Rotaract Member", color: "text-rotaract-red" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-rotaract-red/20 bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="hover:text-rotaract-red"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rotaract-red/5 via-transparent to-background"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rotaract-red to-rotaract-red/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-pulse"></div>
                  <div className="relative h-80 w-80 rounded-2xl overflow-hidden border-2 border-rotaract-red/30">
                    <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-40 h-40 mx-auto rounded-full bg-rotaract-red/10 flex items-center justify-center mb-4">
                          <Code2 className="w-20 h-20 text-rotaract-red" />
                        </div>
                        <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="inline-block px-4 py-1 bg-rotaract-red/10 border border-rotaract-red/30 rounded-full mb-4">
                  <span className="text-sm font-semibold text-rotaract-red">Developer & Rotaractor</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Rtr. Hemanth Challapalli
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Full-Stack Developer & Community Enthusiast
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Passionate about creating impactful digital solutions while serving the community 
                  through Rotaract. Committed to leveraging technology for social good and building 
                  meaningful connections.
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-gradient-card border border-rotaract-red/20 rounded-lg hover:border-rotaract-red hover:shadow-glow transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-muted-foreground hover:text-rotaract-red transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gradient-card border border-rotaract-red/20 rounded-lg hover:border-rotaract-red hover:shadow-glow transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-rotaract-red transition-colors" />
                  </a>
                  <a
                    href="mailto:hemanth@example.com"
                    className="p-3 bg-gradient-card border border-rotaract-red/20 rounded-lg hover:border-rotaract-red hover:shadow-glow transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-rotaract-red transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-gradient-card border-y border-rotaract-red/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-card/50 border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-300 text-center">
                  <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                  <p className="font-semibold text-foreground">{achievement.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-card border border-rotaract-red/20 rounded-full hover:border-rotaract-red hover:shadow-glow transition-all duration-300 cursor-default"
                >
                  <span className="font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-rotaract-red/5 via-transparent to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating or have a project in mind? Feel free to reach out!
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.location.href = 'mailto:hemanth@example.com'}
            >
              Get in Touch
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developer;
