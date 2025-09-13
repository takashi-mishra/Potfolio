import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Palette, 
  Database, 
  BarChart3, 
  Globe, 
  Smartphone,
  Server,
  GitBranch,
  Figma,
  FileText
} from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 95, icon: Globe, category: "Frontend" },
  { name: "JavaScript", level: 90, icon: Code2, category: "Programming" },
  { name: "React.js", level: 88, icon: Smartphone, category: "Frontend" },
  { name: "Node.js", level: 85, icon: Server, category: "Backend" },
  { name: "Express.js", level: 82, icon: Server, category: "Backend" },
  { name: "MongoDB", level: 80, icon: Database, category: "Database" },
  { name: "Python", level: 75, icon: Code2, category: "Programming" },
  { name: "UI/UX Design", level: 92, icon: Palette, category: "Design" },
  { name: "Data Analytics", level: 78, icon: BarChart3, category: "Analytics" },
  { name: "Git/GitHub", level: 88, icon: GitBranch, category: "Tools" },
  { name: "Figma", level: 85, icon: Figma, category: "Design" },
  { name: "MS Office", level: 90, icon: FileText, category: "Tools" },
];

const categories = [
  { name: "Frontend", color: "primary", skills: skills.filter(s => s.category === "Frontend") },
  { name: "Backend", color: "secondary", skills: skills.filter(s => s.category === "Backend") },
  { name: "Design", color: "accent", skills: skills.filter(s => s.category === "Design") },
  { name: "Programming", color: "primary", skills: skills.filter(s => s.category === "Programming") },
  { name: "Database", color: "secondary", skills: skills.filter(s => s.category === "Database") },
  { name: "Analytics", color: "accent", skills: skills.filter(s => s.category === "Analytics") },
  { name: "Tools", color: "primary", skills: skills.filter(s => s.category === "Tools") },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Core Skills Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <Card className="glass-card hover-lift text-center p-4 sm:p-8">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center glow-primary">
                <Palette className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gradient-primary mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-sm">Creating beautiful, user-centric interfaces</p>
          </Card>

          <Card className="glass-card hover-lift text-center p-4 sm:p-8">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center glow-secondary">
                <Code2 className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gradient-secondary mb-2">Frontend Development</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Modern web applications with React</p>
          </Card>

          <Card className="glass-card hover-lift text-center p-4 sm:p-8">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center glow-accent">
                <Server className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gradient-accent mb-2">Backend Development</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Robust APIs and server architecture</p>
          </Card>

          <Card className="glass-card hover-lift text-center p-4 sm:p-8">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center glow-primary">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gradient-primary mb-2">Data Analytics</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Insights through data visualization</p>
          </Card>
        </div>

        {/* Detailed Skills */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            category.skills.length > 0 && (
              <Card key={category.name} className="glass-card hover-lift p-8">
                <h3 className={`text-2xl font-bold mb-6 text-gradient-${category.color}`}>
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="space-y-3 animate-slide-up"
                        style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center glow-${category.color}`}>
                              <Icon className={`w-5 h-5 text-${category.color}`} />
                            </div>
                            <span className="font-semibold">{skill.name}</span>
                          </div>
                          <span className={`text-sm font-bold text-${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted/50"
                        />
                      </div>
                    );
                  })}
                </div>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;