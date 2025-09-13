import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building2 } from "lucide-react";
import hpAiCert from "@/assets/hp-ai-cert.png";
import hpDataCert from "@/assets/hp-data-cert.png";
import digitEducatorLogo from "@/assets/digit-educator-logo.png";

const certifications = [
  {
    title: "AI for Beginners",
    issuer: "HP Life",
    date: "March 2025",
    description: "Gained a basic understanding of the impact of artificial intelligence (AI) on the technological landscape. Learned about key AI concepts and their applications, discovered why data is important to AI, how the technology is being used in businesses, and gained insight into its ethical implications.",
    color: "primary",
    logo: hpAiCert
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP Life",
    date: "August 2025",
    description: "Learned about leading data science and analytics practices, methodologies, and tools, examined the benefits and challenges of a data-driven approach for businesses, and gained knowledge about essential skills needed to pursue a career in the field.",
    color: "secondary",
    logo: hpDataCert
  },
  {
    title: "Full Stack Web Development",
    issuer: "Digit Educator",
    date: "May 2025",
    description: "Comprehensive hands-on training, projects, and assessments in full stack web development. Demonstrated commitment to learning and acquired essential skills in the subject. The course included modern web technologies and best practices.",
    color: "accent",
    logo: digitEducatorLogo
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-primary">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Continuous learning and professional development through recognized courses and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className={`glass-card hover-lift group cursor-pointer animate-slide-up delay-${index * 100}`}
            >
              <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto glass rounded-3xl flex items-center justify-center glow-${cert.color} group-hover:scale-110 transition-transform p-2`}>
                    <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-bold text-gradient-${cert.color} mb-2`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex justify-center">
                  <Badge variant="outline" className={`border-${cert.color}/30 text-${cert.color}`}>
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Achievement Icon */}
                <div className="flex justify-center pt-4">
                  <div className={`w-12 h-12 glass rounded-2xl flex items-center justify-center glow-${cert.color} group-hover:rotate-12 transition-transform`}>
                    <Award className={`w-6 h-6 text-${cert.color}`} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <Card className="glass-card text-center p-4 sm:p-8 hover-lift">
            <div className="text-4xl font-bold text-gradient-primary mb-2">3</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </Card>
          
          <Card className="glass-card text-center p-4 sm:p-8 hover-lift">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">200+</div>
            <div className="text-muted-foreground">Hours of Learning</div>
          </Card>
          
          <Card className="glass-card text-center p-4 sm:p-8 hover-lift">
            <div className="text-4xl font-bold text-gradient-accent mb-2">2025</div>
            <div className="text-muted-foreground">Year of Achievement</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;