import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Star, 
  CheckCircle,
  UserPlus,
  Award,
  Target
} from "lucide-react";

const VolunteerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    experience: '',
    motivation: '',
    skills: [] as string[],
    availability: '',
    interests: [] as string[]
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

    const element = document.querySelector("#volunteer");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Users,
      title: "Network Building",
      description: "Connect with like-minded individuals and build lasting professional relationships"
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Enhance leadership, communication, and project management skills"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Make a real difference in the lives of people in your community"
    },
    {
      icon: Star,
      title: "Recognition",
      description: "Get recognized for your contributions with certificates and awards"
    }
  ];

  const skillOptions = [
    "Leadership",
    "Event Planning",
    "Public Speaking",
    "Social Media",
    "Photography",
    "Writing",
    "Teaching",
    "Technology",
    "Fundraising",
    "Project Management"
  ];

  const interestAreas = [
    "Community Service",
    "Environmental Projects",
    "Education & Literacy",
    "Healthcare Initiatives",
    "Youth Development",
    "Elderly Care"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(s => s !== skill)
      });
    }
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section id="volunteer" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join as <span className="text-rotaract-red">Volunteer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a movement that's creating positive change in our community. 
            Your skills, passion, and dedication can make a real difference.
          </p>
        </div>

        {/* Benefits Section */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 text-center bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-500 ${
                isVisible ? `animate-scale-in delay-${index * 100}` : 'opacity-0'
              }`}
            >
              <benefit.icon className="h-12 w-12 text-rotaract-red mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <Card className={`p-8 bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-500 ${
            isVisible ? 'animate-scale-in delay-500' : 'opacity-0'
          }`}>
            <div className="text-center mb-8">
              <UserPlus className="h-16 w-16 text-rotaract-red mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Volunteer Application
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below to start your journey with RAC RCB
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Target className="h-5 w-5 text-rotaract-red mr-2" />
                  Personal Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
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
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-foreground">Age *</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      max="30"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                      placeholder="25"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="occupation" className="text-foreground">Current Occupation/Studies *</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red"
                    placeholder="e.g., Software Engineer, Student, etc."
                  />
                </div>
              </div>

              {/* Experience & Motivation */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-rotaract-red mr-2" />
                  Experience & Motivation
                </h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience" className="text-foreground">Previous Volunteering Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red resize-none"
                      placeholder="Tell us about any previous volunteering or community service experience..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation" className="text-foreground">Why do you want to join RAC RCB? *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-2 bg-background/50 border-rotaract-red/20 focus:border-rotaract-red resize-none"
                      placeholder="Share your motivation for joining our club and how you want to contribute..."
                    />
                  </div>
                </div>
              </div>

              {/* Skills & Interests */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Star className="h-5 w-5 text-rotaract-red mr-2" />
                  Skills & Interests
                </h4>
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-3 block">Skills (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.skills.includes(skill)}
                            onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                            className="border-rotaract-red/30 data-[state=checked]:bg-rotaract-red"
                          />
                          <Label htmlFor={skill} className="text-sm text-foreground cursor-pointer">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground mb-3 block">Areas of Interest</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {interestAreas.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                            className="border-rotaract-red/30 data-[state=checked]:bg-rotaract-red"
                          />
                          <Label htmlFor={interest} className="text-sm text-foreground cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground mb-3 block">Availability *</Label>
                    <RadioGroup
                      value={formData.availability}
                      onValueChange={(value) => setFormData({...formData, availability: value})}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekends" id="weekends" className="border-rotaract-red/30 text-rotaract-red" />
                        <Label htmlFor="weekends" className="text-foreground">Weekends only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekdays" id="weekdays" className="border-rotaract-red/30 text-rotaract-red" />
                        <Label htmlFor="weekdays" className="text-foreground">Weekday evenings</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" className="border-rotaract-red/30 text-rotaract-red" />
                        <Label htmlFor="flexible" className="text-foreground">Flexible schedule</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="min-w-48"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your application and get back to you within 7 days.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;