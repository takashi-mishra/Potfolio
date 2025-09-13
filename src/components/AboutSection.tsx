import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 glass-card rounded-full p-4 animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-gradient-primary">YM</div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-float delay-300"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Card className="glass-card hover-lift">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gradient-secondary">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Full Stack Developer and UI/UX Designer with expertise in modern web technologies. 
                  I specialize in creating beautiful, functional applications using the MERN stack and have a 
                  strong foundation in data analytics.
                </p>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gradient-accent">Education & Learning</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Full Stack Web Development - Digit Educator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Data Science & Analytics - HP Life</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">AI for Beginners - HP Life</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card hover-lift">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gradient-primary">Focus Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 glass rounded-xl border border-primary/20">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="font-semibold">UI/UX Design</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl border border-secondary/20">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="font-semibold">Full Stack Dev</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl border border-accent/20">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="font-semibold">Data Analytics</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl border border-primary/20">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-semibold">Innovation</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;