import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card hover-lift">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="glass border-white/20 focus:border-primary/50 focus:glow-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass border-white/20 focus:border-primary/50 focus:glow-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="glass border-white/20 focus:border-primary/50 focus:glow-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card hover-lift">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:yogeshmishra@example.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        yogeshmishra@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center glow-secondary group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center glow-accent group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Available Worldwide (Remote)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card hover-lift">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gradient-primary mb-6">Follow Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="group h-16" asChild>
                    <a href="https://github.com/yogesh-mishra" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="group h-16" asChild>
                    <a href="https://linkedin.com/in/yogesh-mishra" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass-card hover-lift">
              <div className="p-8 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-secondary font-semibold">Available for Projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new freelance projects and full-time opportunities
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;