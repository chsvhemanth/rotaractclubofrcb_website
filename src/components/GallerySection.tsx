import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from "lucide-react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
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

    const element = document.querySelector("#gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "events",
      title: "Youth Leadership Summit 2023",
      year: "2023",
      thumbnail: "🎯",
      description: "300+ young leaders gathered for inspiring workshops"
    },
    {
      id: 2,
      type: "video",
      category: "projects",
      title: "Tree Plantation Drive",
      year: "2024",
      thumbnail: "🌳",
      description: "500+ trees planted across Vijayawada"
    },
    {
      id: 3,
      type: "image",
      category: "community",
      title: "Blood Donation Camp",
      year: "2024",
      thumbnail: "🩸",
      description: "150+ units of blood collected for local hospitals"
    },
    {
      id: 4,
      type: "image",
      category: "events",
      title: "Diwali Celebration",
      year: "2024",
      thumbnail: "🪔",
      description: "Spreading joy with 200+ senior citizens"
    },
    {
      id: 5,
      type: "video",
      category: "projects",
      title: "Digital Literacy Program",
      year: "2024",
      thumbnail: "💻",
      description: "Teaching technology skills to elderly citizens"
    },
    {
      id: 6,
      type: "image",
      category: "community",
      title: "Health Camp",
      year: "2024",
      thumbnail: "🏥",
      description: "Free medical checkups for 500+ people"
    },
    {
      id: 7,
      type: "image",
      category: "events",
      title: "Installation Ceremony",
      year: "2023",
      thumbnail: "👑",
      description: "New board members taking their oath"
    },
    {
      id: 8,
      type: "video",
      category: "projects",
      title: "Clean Water Initiative",
      year: "2023",
      thumbnail: "💧",
      description: "Installing water purification systems"
    },
    {
      id: 9,
      type: "image",
      category: "community",
      title: "Education Support Drive",
      year: "2024",
      thumbnail: "📚",
      description: "Providing school supplies to underprivileged children"
    }
  ];

  const categories = [
    { key: "all", label: "All Media" },
    { key: "events", label: "Events" },
    { key: "projects", label: "Projects" },
    { key: "community", label: "Community Service" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: any) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia?.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedMedia(filteredItems[nextIndex]);
  };

  const prevMedia = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia?.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedMedia(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-rotaract-red">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of impact, joy, and community service across our journey
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-4 bg-background/50 p-2 rounded-lg border border-rotaract-red/20">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.key)}
                className={selectedCategory === category.key ? "bg-rotaract-red hover:bg-rotaract-dark-red" : "hover:text-rotaract-red"}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer overflow-hidden bg-gradient-card border-rotaract-red/20 hover:border-rotaract-red hover:shadow-glow transition-all duration-500 ${
                isVisible ? `animate-scale-in delay-${index * 100}` : 'opacity-0'
              }`}
              onClick={() => openLightbox(item)}
            >
              {/* Media Preview */}
              <div className="relative aspect-video bg-background/50 flex items-center justify-center text-6xl overflow-hidden">
                {item.thumbnail}
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge className={item.type === "video" ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}>
                    {item.type === "video" ? <Video className="h-3 w-3 mr-1" /> : <ImageIcon className="h-3 w-3 mr-1" />}
                    {item.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="border-rotaract-red/30 text-rotaract-red">
                    {item.year}
                  </Badge>
                </div>
              </div>

              {/* Media Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-rotaract-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <ImageIcon className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Photos</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <Video className="h-10 w-10 text-red-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <div className="text-2xl mb-3">🎉</div>
            <div className="text-2xl font-bold text-foreground mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Events Covered</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-rotaract-red/20 hover:shadow-glow transition-all duration-300">
            <div className="text-2xl mb-3">⏱️</div>
            <div className="text-2xl font-bold text-foreground mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Years of Memories</div>
          </Card>
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-rotaract-red transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rotaract-red transition-colors z-10"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rotaract-red transition-colors z-10"
              >
                <ChevronRight className="h-12 w-12" />
              </button>

              {/* Media Content */}
              <div className="bg-background rounded-lg overflow-hidden">
                <div className="aspect-video bg-background/50 flex items-center justify-center text-8xl">
                  {selectedMedia.thumbnail}
                  {selectedMedia.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-16 w-16 text-rotaract-red" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedMedia.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <Badge variant="outline" className="border-rotaract-red/30 text-rotaract-red">
                      {selectedMedia.year}
                    </Badge>
                    <Badge className={selectedMedia.type === "video" ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}>
                      {selectedMedia.type === "video" ? <Video className="h-3 w-3 mr-1" /> : <ImageIcon className="h-3 w-3 mr-1" />}
                      {selectedMedia.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;