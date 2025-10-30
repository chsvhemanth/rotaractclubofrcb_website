import { useState, useEffect, createElement } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Crown, Target, Briefcase, Users, Heart, Globe, Award, BookOpen, Shield, Compass, Sparkles } from "lucide-react";
import memberImage from "@/assets/logo-full.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
  avatar: string;
  badge: React.ElementType;
  primaryColor: string;
  borderColor: string;
  glowColor: string;
}

const MembersSection = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
  // Immediate Past President
  {
    id: 1,
    name: "PHF IPP Rtr Prabhu Kalyan Ratnala",
    role: "Immediate Past President",
    bio: "Continuing to support the club through experience, legacy, and impactful leadership.",
    shortBio: "Veteran Rotaractor with a vision for impactful leadership.",
    instagram: "https://instagram.com/prabhu_kalyan",
    linkedin: "https://linkedin.com/in/prabhu_kalyan",
    twitter: "https://twitter.com/prabhu_kalyan",
    image: "/public/members/kalyan.png",
    avatar: "👔",
    badge: Crown,
    primaryColor: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/30",
    glowColor: "hover:shadow-pink-500/50",
  },
  // President
  {
    id: 2,
    name: "Rtr Lakshmi Sarvani Chilukuri",
    role: "President",
    bio: "Leading with purpose and empowering members to create meaningful community impact.",
    shortBio: "Passionate about youth leadership and social initiatives.",
    instagram: "https://instagram.com/lakshmi_sarvani",
    linkedin: "https://linkedin.com/in/lakshmi_sarvani",
    twitter: "https://twitter.com/lakshmi_sarvani",
    image: "/public/members/sarvani.png",
    avatar: "👩‍💼",
    badge: Crown,
    primaryColor: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-purple-500/50",
  },
  // Secretary Administrations
  {
    id: 3,
    name: "Rtr Satya Venkata Hemanth Challapalli",
    role: "Secretary Administrations",
    bio: "Coordinating administrative tasks and supporting project management with precision.",
    shortBio: "Organized and detail-oriented Rotaractor.",
    instagram: "https://instagram.com/hemanth_challapalli",
    linkedin: "https://linkedin.com/in/satya_hemanth",
    twitter: "https://twitter.com/satya_hemanth",
    image: "/public/members/hemanth.jpg",
    avatar: "🗂️",
    badge: Target,
    primaryColor: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-blue-500/50",
  },
  // Secretary General
  {
    id: 4,
    name: "Rtr Bhukya Mohan Krishna Naik",
    role: "Secretary General",
    bio: "Ensuring effective communication and coordination within the club’s leadership.",
    shortBio: "Expert in communication and strategic planning.",
    instagram: "https://instagram.com/mohan_krishna",
    linkedin: "https://linkedin.com/in/mohan_krishna",
    twitter: "https://twitter.com/mohan_krishna",
    image: "/public/members/mohan.jpeg",
    avatar: "📄",
    badge: Briefcase,
    primaryColor: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    glowColor: "hover:shadow-green-500/50",
  },
  // Vice President
  {
    id: 5,
    name: "Rtr Akhil Boodala",
    role: "Vice President",
    bio: "Supporting leadership vision and overseeing the successful execution of club initiatives.",
    shortBio: "Focused on operational excellence and team growth.",
    instagram: "https://instagram.com/akhil_boodala",
    linkedin: "https://linkedin.com/in/akhil_boodala",
    twitter: "https://twitter.com/akhil_boodala",
    image: "/public/members/akhil.png",
    avatar: "👨‍💻",
    badge: Briefcase,
    primaryColor: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    glowColor: "hover:shadow-orange-500/50",
  },
  // Joint Secretary
  {
    id: 6,
    name: "Rtr Chamu",
    role: "Joint Secretary",
    bio: "Assisting in documentation and smooth internal coordination across departments.",
    shortBio: "Team player with a knack for organization.",
    instagram: "https://instagram.com/rtr_chamu",
    linkedin: "https://linkedin.com/in/rtr_chamu",
    twitter: "https://twitter.com/rtr_chamu",
    image: "/public/members/chamu.jpg",
    avatar: "📑",
    badge: Briefcase,
    primaryColor: "from-teal-500 to-green-400",
    borderColor: "border-teal-500/30",
    glowColor: "hover:shadow-teal-500/50",
  },
  // Treasurer and Club Advisor
  {
    id: 7,
    name: "PP Rtr Phanindra Sunkara",
    role: "Club Advisor cum Treasurer",
    bio: "Providing mentorship and guidance to ensure the club’s financial and strategic stability.",
    shortBio: "Experienced mentor focused on financial stability.",
    instagram: "https://instagram.com/phanindra_sunkara",
    linkedin: "https://linkedin.com/in/phanindra_sunkara",
    twitter: "https://twitter.com/phanindra_sunkara",
    image: "/public/members/phanindra.jpg",
    avatar: "🧑‍🏫",
    badge: Crown,
    primaryColor: "from-amber-500 to-yellow-500",
    borderColor: "border-amber-500/30",
    glowColor: "hover:shadow-amber-500/50",
  },
  // Sergeant at Arms
  {
    id: 8,
    name: "Rtr Rakesh Varma Edara",
    role: "Sergeant at Arms",
    bio: "Maintaining order, discipline, and decorum at meetings and club events.",
    shortBio: "Disciplined and vigilant in club operations.",
    instagram: "https://instagram.com/rakesh_edara",
    linkedin: "https://linkedin.com/in/rakesh_edara",
    twitter: "https://twitter.com/rakesh_edara",
    image: memberImage,
    avatar: "🛡️",
    badge: Shield,
    primaryColor: "from-gray-500 to-slate-500",
    borderColor: "border-gray-500/30",
    glowColor: "hover:shadow-gray-500/50",
  },
  // International Service Director
  {
    id: 9,
    name: "Rtr Aakarsh Mattupalli",
    role: "International Service Director",
    bio: "Promoting global connections and fostering international understanding among clubs.",
    shortBio: "Global connector with international experience.",
    instagram: "https://instagram.com/aakarsh_mattupalli",
    linkedin: "https://linkedin.com/in/aakarsh_mattupalli",
    twitter: "https://twitter.com/aakarsh_mattupalli",
    image: memberImage,
    avatar: "🌍",
    badge: Globe,
    primaryColor: "from-blue-500 to-indigo-500",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-blue-500/50",
  },
  // Professional Service Director
  {
    id: 10,
    name: "Rtr S.M. Yasaswi",
    role: "Professional Service Director",
    bio: "Fostering skill development and leadership through professional service opportunities.",
    shortBio: "Career-oriented and skilled in professional growth.",
    instagram: "https://instagram.com/sm_yasaswi",
    linkedin: "https://linkedin.com/in/sm_yasaswi",
    twitter: "https://twitter.com/sm_yasaswi",
    image: memberImage,
    avatar: "💼",
    badge: Target,
    primaryColor: "from-sky-500 to-blue-400",
    borderColor: "border-sky-500/30",
    glowColor: "hover:shadow-sky-500/50",
  },
  // ... continue similarly for all remaining members up to id: 29
  // Community Service Director
{
  id: 11,
  name: "Rtr Nakka Haran Raj",
  role: "Community Service Director",
  bio: "Driving impactful initiatives to uplift and serve the local community.",
  shortBio: "Passionate about community upliftment and social service.",
  instagram: "https://instagram.com/haran_raj",
  linkedin: "https://linkedin.com/in/haran_raj",
  twitter: "https://twitter.com/haran_raj",
  image: memberImage,
  avatar: "🤝",
  badge: Heart,
  primaryColor: "from-red-500 to-rose-500",
  borderColor: "border-red-500/30",
  glowColor: "hover:shadow-red-500/50",
},
// Club Service Director
{
  id: 12,
  name: "Rtr Hemesh Adapa",
  role: "Club Service Director",
  bio: "Strengthening fellowship and engagement among members through creative activities.",
  shortBio: "Creative thinker and fellowship enthusiast.",
  instagram: "https://instagram.com/hemesh_adapa",
  linkedin: "https://linkedin.com/in/hemesh_adapa",
  twitter: "https://twitter.com/hemesh_adapa",
  image: memberImage,
  avatar: "🎯",
  badge: Users,
  primaryColor: "from-rose-500 to-pink-400",
  borderColor: "border-rose-500/30",
  glowColor: "hover:shadow-rose-500/50",
},
// Youth Service Director
{
  id: 13,
  name: "Rtr Mohit Chanduluri",
  role: "Youth Service Director",
  bio: "Empowering young leaders to make a difference through mentorship and guidance.",
  shortBio: "Mentor for young leaders and youth empowerment advocate.",
  instagram: "https://instagram.com/mohit_chanduluri",
  linkedin: "https://linkedin.com/in/mohit_chanduluri",
  twitter: "https://twitter.com/mohit_chanduluri",
  image: memberImage,
  avatar: "🌱",
  badge: Users,
  primaryColor: "from-emerald-500 to-teal-500",
  borderColor: "border-emerald-500/30",
  glowColor: "hover:shadow-emerald-500/50",
},
// Sports Director
{
  id: 14,
  name: "Rtr Akash Dangudubiyyapu",
  role: "Sports Director",
  bio: "Encouraging physical fitness and team spirit through organized sports events.",
  shortBio: "Sports enthusiast promoting fitness and teamwork.",
  instagram: "https://instagram.com/akash_dangudu",
  linkedin: "https://linkedin.com/in/akash_dangudu",
  twitter: "https://twitter.com/akash_dangudu",
  image: memberImage,
  avatar: "⚽",
  badge: Target,
  primaryColor: "from-lime-500 to-green-400",
  borderColor: "border-lime-500/30",
  glowColor: "hover:shadow-lime-500/50",
},
// 7 Areas of Focus
{
  id: 15,
  name: "Rtr Anitha Vanamala",
  role: "7 Areas of Focus",
  bio: "Promoting the Rotary areas of focus through targeted and sustainable initiatives.",
  shortBio: "Focused on promoting Rotary’s key initiatives.",
  instagram: "https://instagram.com/anitha_vanamala",
  linkedin: "https://linkedin.com/in/anitha_vanamala",
  twitter: "https://twitter.com/anitha_vanamala",
  image: memberImage,
  avatar: "🌟",
  badge: Compass,
  primaryColor: "from-purple-500 to-indigo-500",
  borderColor: "border-purple-500/30",
  glowColor: "hover:shadow-purple-500/50",
},
// Membership Director
{
  id: 16,
  name: "Rtr Dhavan Sai Kaki",
  role: "Membership Director",
  bio: "Strengthening the club by recruiting and engaging dedicated new members.",
  shortBio: "Connecting people and building strong membership.",
  instagram: "https://instagram.com/dhavan_sai",
  linkedin: "https://linkedin.com/in/dhavan_sai",
  twitter: "https://twitter.com/dhavan_sai",
  image: memberImage,
  avatar: "📋",
  badge: Users,
  primaryColor: "from-violet-500 to-indigo-500",
  borderColor: "border-violet-500/30",
  glowColor: "hover:shadow-violet-500/50",
},
// Environmental Chair
{
  id: 17,
  name: "Rtr Bhagya Sri Korsa",
  role: "Environment Chair",
  bio: "Leading sustainability projects and creating awareness about environmental conservation.",
  shortBio: "Environmental advocate and sustainability leader.",
  instagram: "https://instagram.com/bhagya_sri",
  linkedin: "https://linkedin.com/in/bhagya_sri",
  twitter: "https://twitter.com/bhagya_sri",
  image: memberImage,
  avatar: "🌿",
  badge: Target,
  primaryColor: "from-green-600 to-lime-500",
  borderColor: "border-green-600/30",
  glowColor: "hover:shadow-green-600/50",
},
// Events & Project Chair
{
  id: 18,
  name: "Rtr A Havishka Samrat",
  role: "Events & Project Chair",
  bio: "Coordinating major events and ensuring flawless execution of all club projects.",
  shortBio: "Event planner ensuring smooth execution of projects.",
  instagram: "https://instagram.com/havishka_samrat",
  linkedin: "https://linkedin.com/in/havishka_samrat",
  twitter: "https://twitter.com/havishka_samrat",
  image: memberImage,
  avatar: "📅",
  badge: Briefcase,
  primaryColor: "from-orange-500 to-amber-500",
  borderColor: "border-orange-500/30",
  glowColor: "hover:shadow-orange-500/50",
},
// RYLA Chair
{
  id: 19,
  name: "Rtr Sandeep Kapilavai",
  role: "RYLA Chair",
  bio: "Encouraging leadership through Rotary Youth Leadership Awards and youth empowerment events.",
  shortBio: "Passionate about developing leadership in youth.",
  instagram: "https://instagram.com/sandeep_kapilavai",
  linkedin: "https://linkedin.com/in/sandeep_kapilavai",
  twitter: "https://twitter.com/sandeep_kapilavai",
  image: memberImage,
  avatar: "🏅",
  badge: Award,
  primaryColor: "from-yellow-500 to-amber-500",
  borderColor: "border-yellow-500/30",
  glowColor: "hover:shadow-yellow-500/50",
},
// Foundation Chair
{
  id: 20,
  name: "Rtr Ganesh Kumar Vukanti",
  role: "Foundation Chair",
  bio: "Managing club contributions and awareness toward Rotary Foundation initiatives.",
  shortBio: "Dedicated to Rotary Foundation and social causes.",
  instagram: "https://instagram.com/ganesh_vukanti",
  linkedin: "https://linkedin.com/in/ganesh_vukanti",
  twitter: "https://twitter.com/ganesh_vukanti",
  image: memberImage,
  avatar: "🏛️",
  badge: Crown,
  primaryColor: "from-indigo-600 to-blue-500",
  borderColor: "border-indigo-600/30",
  glowColor: "hover:shadow-indigo-600/50",
},
// ROTASIA Chair
{
  id: 21,
  name: "PP Rtr Kavya Gadhe",
  role: "ROTASIA Chair",
  bio: "Representing the club in interdistrict and national Rotasia events with pride and excellence.",
  shortBio: "International representative at ROTASIA events.",
  instagram: "https://instagram.com/kavya_gadhe",
  linkedin: "https://linkedin.com/in/kavya_gadhe",
  twitter: "https://twitter.com/kavya_gadhe",
  image: memberImage,
  avatar: "🌏",
  badge: Globe,
  primaryColor: "from-cyan-500 to-teal-500",
  borderColor: "border-cyan-500/30",
  glowColor: "hover:shadow-cyan-500/50",
},
// Polio Chair
{
  id: 22,
  name: "Rtr Daswanth Talpuri",
  role: "Polio Chair",
  bio: "Advocating awareness and initiatives toward Rotary’s goal of ending polio worldwide.",
  shortBio: "Health advocate aiming to eradicate polio globally.",
  instagram: "https://instagram.com/daswanth_talpuri",
  linkedin: "https://linkedin.com/in/daswanth_talpuri",
  twitter: "https://twitter.com/daswanth_talpuri",
  image: memberImage,
  avatar: "💉",
  badge: Target,
  primaryColor: "from-rose-500 to-orange-400",
  borderColor: "border-rose-500/30",
  glowColor: "hover:shadow-rose-500/50",
},
// Fellowship Chair
{
  id: 23,
  name: "Rtr Azizul Usman",
  role: "Fellowship Chair",
  bio: "Promoting fellowship and member engagement through activities and social events.",
  shortBio: "Bringing members together through fellowship activities.",
  instagram: "https://instagram.com/azizul_usman",
  linkedin: "https://linkedin.com/in/azizul_usman",
  twitter: "https://twitter.com/azizul_usman",
  image: memberImage,
  avatar: "🤗",
  badge: Users,
  primaryColor: "from-pink-400 to-pink-500",
  borderColor: "border-pink-400/30",
  glowColor: "hover:shadow-pink-400/50",
},
// Mahadan Chair
{
  id: 24,
  name: "Rtr Shaik Meera Sharif",
  role: "Mahadan Chair",
  bio: "Promoting blood donation awareness and organizing successful donation drives.",
  shortBio: "Blood donation advocate and organizer.",
  instagram: "https://instagram.com/meera_sharif",
  linkedin: "https://linkedin.com/in/meera_sharif",
  twitter: "https://twitter.com/meera_sharif",
  image: memberImage,
  avatar: "🩸",
  badge: Heart,
  primaryColor: "from-red-500 to-red-600",
  borderColor: "border-red-500/30",
  glowColor: "hover:shadow-red-500/50",
},
// Women Empowerment Chair
{
  id: 25,
  name: "Rtr G. V. S. Hasini Chandana",
  role: "Women Empowerment Chair",
  bio: "Empowering women in leadership, professional, and social initiatives.",
  shortBio: "Champion for women’s leadership and empowerment.",
  instagram: "https://instagram.com/hasini_chandana",
  linkedin: "https://linkedin.com/in/hasini_chandana",
  twitter: "https://twitter.com/hasini_chandana",
  image: memberImage,
  avatar: "♀️",
  badge: Users,
  primaryColor: "from-purple-500 to-pink-500",
  borderColor: "border-purple-500/30",
  glowColor: "hover:shadow-purple-500/50",
},
// Creative Head
{
  id: 26,
  name: "Rtr Satya Sri Yepuri",
  role: "Creative Head",
  bio: "Bringing innovative ideas and design flair to enhance club activities and events.",
  shortBio: "Creative mind driving innovation in club events.",
  instagram: "https://instagram.com/satya_sri",
  linkedin: "https://linkedin.com/in/satya_sri",
  twitter: "https://twitter.com/satya_sri",
  image: memberImage,
  avatar: "🎨",
  badge: Sparkles,
  primaryColor: "from-fuchsia-500 to-pink-500",
  borderColor: "border-fuchsia-500/30",
  glowColor: "hover:shadow-fuchsia-500/50",
},
// PR & Media
{
  id: 27,
  name: "PHF Rtr Sai Teja Jarabala",
  role: "PR & Media",
  bio: "Handling club publicity, media presence, and storytelling through digital platforms.",
  shortBio: "Expert in PR and media outreach.",
  instagram: "https://instagram.com/sai_teja",
  linkedin: "https://linkedin.com/in/sai_teja",
  twitter: "https://twitter.com/sai_teja",
  image: memberImage,
  avatar: "📸",
  badge: Globe,
  primaryColor: "from-sky-500 to-cyan-400",
  borderColor: "border-sky-500/30",
  glowColor: "hover:shadow-sky-500/50",
},
// Club Learning Facilitator
{
  id: 28,
  name: "PP Rtr Sasi Kumar Eda",
  role: "Club Learning Facilitator",
  bio: "Encouraging knowledge sharing and continuous learning across all Rotaract initiatives.",
  shortBio: "Learning enthusiast and knowledge sharer.",
  instagram: "https://instagram.com/sasi_kumar",
  linkedin: "https://linkedin.com/in/sasi_kumar",
  twitter: "https://twitter.com/sasi_kumar",
  image: memberImage,
  avatar: "📘",
  badge: BookOpen,
  primaryColor: "from-indigo-500 to-blue-500",
  borderColor: "border-indigo-500/30",
  glowColor: "hover:shadow-indigo-500/50",
},
// Editor
{
  id: 29,
  name: "Rtr Mahalakshmi",
  role: "Editor",
  bio: "Documenting the club’s journey and maintaining quality in communications and newsletters.",
  shortBio: "Skilled editor capturing the club’s stories.",
  instagram: "https://instagram.com/mahalakshmi",
  linkedin: "https://linkedin.com/in/mahalakshmi",
  twitter: "https://twitter.com/mahalakshmi",
  image: memberImage,
  avatar: "🖋️",
  badge: BookOpen,
  primaryColor: "from-rose-400 to-red-500",
  borderColor: "border-rose-400/30",
  glowColor: "hover:shadow-rose-400/50",
},

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
                  <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-lg"
                      />
                    ) : (
                      <div className="text-6xl md:text-7xl w-full h-full flex items-center justify-center rounded-full bg-muted-foreground/5">
                        {member.avatar}
                      </div>
                    )}
                  </div>
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
              <div className="grid grid-cols-3 gap-4">
                {boardMembers
                  .slice(currentMember + 1, currentMember + 4)
                  .map((m, index) => {
                    const actualIndex = (currentMember + 1 + index) % boardMembers.length;
                    return (
                      <div
                        key={m.id}
                        onClick={() => {
                          setSelectedMember(actualIndex);
                          setIsDialogOpen(true);
                        }}
                        className="cursor-pointer focus:outline-none transform transition-all duration-200 hover:scale-105"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setSelectedMember(actualIndex);
                            setIsDialogOpen(true);
                          }
                        }}
                      >
                        <Card className="p-4 text-center bg-gradient-card border-2 transition-all duration-300 hover:border-rotaract-red/30 hover:shadow-lg">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2">
                            {m.image ? (
                              <img
                                src={m.image}
                                alt={m.name}
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <div className="text-3xl sm:text-4xl w-full h-full flex items-center justify-center rounded-full bg-muted-foreground/5">
                                {m.avatar}
                              </div>
                            )}
                          </div>
                          <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1 line-clamp-1">
                            {m.name}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-1">{m.role}</p>
                        </Card>
                      </div>
                    );
                  })}
              </div>

              {/* Member Details Dialog */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[500px] p-6">
                  <DialogHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20">
                          {selectedMember !== null && boardMembers[selectedMember].image ? (
                            <img
                              src={boardMembers[selectedMember].image}
                              alt={boardMembers[selectedMember].name}
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            selectedMember !== null && (
                              <div className="text-3xl w-full h-full flex items-center justify-center rounded-full bg-muted-foreground/5">
                                {boardMembers[selectedMember].avatar}
                              </div>
                            )
                          )}
                        </div>
                        <div>
                          {selectedMember !== null && (
                            <>
                              <DialogTitle className="text-2xl font-bold mb-2">
                                {boardMembers[selectedMember].name}
                              </DialogTitle>
                              <Badge className={`bg-gradient-to-r ${boardMembers[selectedMember].primaryColor} text-white border-0`}>
                                {createElement(boardMembers[selectedMember].badge, {
                                  className: "h-4 w-4 mr-1"
                                })}
                                {boardMembers[selectedMember].role}
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      <DialogClose className="rounded-full hover:bg-muted p-2">
                        <X className="h-4 w-4" />
                      </DialogClose>
                    </div>
                  </DialogHeader>
                  
                  {selectedMember !== null && (
                    <div className="pt-4 space-y-4">
                      <DialogDescription>
                        <p>{boardMembers[selectedMember].bio}</p>
                        {boardMembers[selectedMember].shortBio && (
                          <p className="text-sm italic text-muted-foreground mt-2">{boardMembers[selectedMember].shortBio}</p>
                        )}
                      </DialogDescription>
                      
                      <div className="flex space-x-4">
                        {boardMembers[selectedMember].instagram && (
                          <a
                            href={boardMembers[selectedMember].instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            Instagram
                          </a>
                        )}
                        {boardMembers[selectedMember].linkedin && (
                          <a
                            href={boardMembers[selectedMember].linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline"
                          >
                            LinkedIn
                          </a>
                        )}
                        {boardMembers[selectedMember].twitter && (
                          <a
                            href={boardMembers[selectedMember].twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-500 hover:underline"
                          >
                            Twitter
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
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