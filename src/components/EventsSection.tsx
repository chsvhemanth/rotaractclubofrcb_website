import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    const element = document.querySelector("#events");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Countdown timer for next event
  useEffect(() => {
    const targetDate = new Date('2024-12-15T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Youth Leadership Summit 2024",
      description: "Join 300+ young leaders for workshops, networking, and inspiring talks on making a difference.",
      date: "December 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Vijayawada Convention Center",
      capacity: "300 attendees",
      poster: "🎯",
      type: "Conference",
      status: "Registration Open",
      featured: true
    },
    {
      id: 2,
      title: "Community Clean-Up Drive",
      description: "Help us clean up the Krishna riverfront and create awareness about environmental conservation.",
      date: "January 10, 2025",
      time: "6:00 AM - 10:00 AM",
      location: "Krishna River Bank",
      capacity: "100 volunteers",
      poster: "🌊",
      type: "Community Service",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Professional Development Workshop",
      description: "Enhance your skills with expert-led sessions on leadership, communication, and project management.",
      date: "January 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "RAC RCB Clubhouse",
      capacity: "50 members",
      poster: "📈",
      type: "Workshop",
      status: "Coming Soon"
    }
  ];

  const pastEvents = [
    {
      title: "Blood Donation Camp",
      date: "November 2024",
      impact: "150+ units collected",
      poster: "🩸"
    },
    {
      title: "Diwali Celebration with Elderly",
      date: "October 2024",
      impact: "200+ senior citizens",
      poster: "🪔"
    },
    {
      title: "Tree Plantation Drive",
      date: "September 2024",
      impact: "500+ saplings planted",
      poster: "🌱"
    },
    {
      title: "Digital Literacy Training",
      date: "August 2024",
      impact: "100+ people trained",
      poster: "💻"
    }
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const event = upcomingEvents[currentEvent];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Upcoming <span className="text-rotaract-red">Events</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our upcoming events and be part of the change you want to see
          </p>
        </div>

        {/* Featured Event Countdown */}
        <div className={`mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Card className="p-8 bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Next Major Event
              </h3>
              <div className="text-6xl mb-4">{event.poster}</div>
              <h4 className="text-xl md:text-2xl font-semibold text-rotaract-red mb-2">
                {event.title}
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {event.description}
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-rotaract-red/10 border border-rotaract-red/30 rounded-lg p-4 mb-2">
                    <div className="text-2xl md:text-3xl font-bold text-rotaract-red">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-rotaract-red" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-rotaract-red" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-rotaract-red" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5 text-rotaract-red" />
                <span>{event.capacity}</span>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg">
                Register Now
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>


        {/* Past Events */}
        <div className={`${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Recent Events
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pastEvents.map((evt, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300 text-center">
                <div className="text-3xl mb-3">{evt.poster}</div>
                <h5 className="font-semibold text-foreground mb-2 text-sm">{evt.title}</h5>
                <p className="text-xs text-muted-foreground mb-2">{evt.date}</p>
                <p className="text-xs text-rotaract-red">{evt.impact}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;