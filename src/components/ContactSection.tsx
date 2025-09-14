import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_1mkeb6k',
        'template_xyz123', // You'll need to create a template in EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yogesh Mishra',
        },
        'SLKQbbCfrhpba7CL7'
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="glass-card hover-lift">
            <div className="p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-secondary mb-4 sm:mb-6">Send a Message</h3>
              
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
          <div className="space-y-4 sm:space-y-8">
            <Card className="glass-card hover-lift">
              <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-accent mb-4 sm:mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:yogeshmishra4822@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        yogeshmishra4822@gmail.com
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
                        href="tel:+919350758908" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +91 9350758908
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
              <div className="p-4 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gradient-primary mb-4 sm:mb-6">Follow Me</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className="p-4 sm:p-8 text-center">
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