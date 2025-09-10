import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient-primary">Yogesh</span>{" "}
              <span className="text-gradient-accent">Mishra</span>
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer, UI/UX Designer, and Data Analytics Enthusiast passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="group" asChild>
                <a href="https://github.com/yogesh-mishra" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="group" asChild>
                <a href="https://linkedin.com/in/yogesh-mishra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="group" asChild>
                <a href="mailto:yogeshmishra@example.com">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gradient-secondary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">
                Certifications
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gradient-accent">Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Frontend Development</span>
              <span className="text-muted-foreground">Backend Development</span>
              <span className="text-muted-foreground">UI/UX Design</span>
              <span className="text-muted-foreground">Data Analytics</span>
              <span className="text-muted-foreground">Full Stack Solutions</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2025 Yogesh Mishra. All Rights Reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee</span>
            </span>
          </div>

          {/* Back to Top */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;