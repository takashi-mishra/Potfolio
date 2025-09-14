import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import smartcareHospital from "@/assets/smartcare-hospital.png";
import uberClone from "@/assets/uber-clone.png";
import fantaWebsite from "@/assets/fanta-website.png";
import imageEnhancer from "@/assets/image-enhancer.png";
import aiChatbot from "@/assets/ai-chatbot.png";

const projects = [
  {
    title: "SmartCare Hospital",
    description: "A comprehensive healthcare website built with modern web technologies. Features responsive design, appointment booking system, emergency care services, and intuitive user interface for medical professionals and patients.",
    url: "https://medical-site-tau.vercel.app/",
    image: smartcareHospital,
    tags: ["React", "Healthcare", "Responsive Design", "UI/UX"],
    color: "primary"
  },
  {
    title: "Uber Clone",
    description: "Full-stack ride-sharing application clone with real-time features. Includes user authentication, ride booking, payment integration, and driver-passenger matching system with traffic light navigation interface.",
    url: "https://uber-clone-1-frontend.onrender.com/",
    image: uberClone,
    tags: ["MERN Stack", "Real-time", "Payment Gateway", "Geolocation"],
    color: "secondary"
  },
  {
    title: "Fanta Landing Page",
    description: "Creative and vibrant Fanta brand website showcasing modern CSS animations and interactive design. Features stunning orange gradient backgrounds, product showcase, and engaging user interactions.",
    url: "https://fanta-project-six.vercel.app/",
    image: fantaWebsite,
    tags: ["CSS Animations", "JavaScript", "Brand Design", "Interactive"],
    color: "accent"
  },
  {
    title: "AI-Powered Image Enhancer",
    description: "Advanced image enhancement application using artificial intelligence. Provides automatic image improvement, before/after comparison, noise reduction, and quality enhancement features with intuitive upload interface.",
    url: "https://ai-powered-image-enhancer-app.vercel.app/",
    image: imageEnhancer,
    tags: ["AI/ML", "Image Processing", "React", "API Integration"],
    color: "primary"
  },
  {
    title: "AI Chatbox",
    description: "Intelligent chatbot application with natural language processing capabilities. Features conversational AI, user-friendly interface, and seamless communication flow.",
    url: "https://takashi-mishra.github.io/Chatbox",
    image: aiChatbot,
    tags: ["AI/ML", "NLP", "Chat Interface", "JavaScript"],
    color: "secondary"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my latest work demonstrating technical skills, creativity, and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`glass-card hover-lift group animate-slide-up delay-${index * 100} overflow-hidden`}
            >
              <div className="p-8 space-y-6">
                {/* Project Image/Icon */}
                <div className="relative">
                  <div className={`w-full h-48 glass rounded-2xl flex items-center justify-center glow-${project.color} group-hover:scale-105 transition-transform relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                    {typeof project.image === 'string' && (project.image.startsWith('🏥') || project.image.startsWith('💬')) ? (
                      <span className="text-8xl relative z-10">{project.image}</span>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover relative z-10 rounded-xl"
                      />
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                      <Button variant="glass" size="lg" className="relative z-30" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-5 h-5 mr-2" />
                          View Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-2xl font-bold text-gradient-${project.color} mb-2 group-hover:scale-105 transition-transform`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 transition-colors`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant={project.color === 'primary' ? 'default' : project.color === 'secondary' ? 'secondary' : 'accent'} 
                      size="sm" 
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="sm" className="group/btn" asChild>
                      <a href="https://github.com/takashi-mishra" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card hover-lift p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;