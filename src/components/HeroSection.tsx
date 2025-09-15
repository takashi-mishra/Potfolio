import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-float delay-200"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float delay-400"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/30 rounded-full blur-lg animate-float delay-300"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 w-full max-w-6xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Name with gradient text */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight animate-slide-up leading-tight">
              <span className="text-gradient-primary">Yogesh</span>{" "}
              <span className="text-gradient-accent">Mishra</span>
            </h1>
            
            {/* Subtitle/Tagline */}
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-light text-muted-foreground animate-slide-up delay-200 leading-relaxed px-2">
              <span className="text-gradient-secondary">Full Stack Developer</span>
              <span className="hidden sm:inline"> <span className="text-primary">|</span> </span>
              <br className="sm:hidden" />
              <span className="text-gradient-primary">UI/UX Designer</span>
              <span className="hidden sm:inline"> <span className="text-primary">|</span> </span>
              <br className="sm:hidden" />
              <span className="text-gradient-accent">Data Analytics Enthusiast</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up delay-400 px-4">
            <Button 
              variant="hero" 
              size="hero"
              className="group"
              asChild
            >
              <a href="mailto:yogeshmishra4822@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Email Me
              </a>
            </Button>
            
            <Button 
              variant="accent" 
              size="hero"
              className="group"
              asChild
            >
              <a href="tel:+919350758908">
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Me
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;