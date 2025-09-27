import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, FileText, Brain, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "AI-Powered Speaking Practice",
      description: "Practice with our advanced AI tutor that provides real-time feedback on pronunciation, fluency, and grammar.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: FileText,
      title: "Comprehensive Mock Tests",
      description: "Take full-length IELTS practice tests with detailed analytics and band score predictions.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Brain,
      title: "Smart Band Score Analysis",
      description: "Get personalized insights and recommendations to improve your weak areas and reach your target band.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BookOpen,
      title: "Expert Study Materials",
      description: "Access curated content from IELTS experts, including vocabulary builders, grammar guides, and essay templates.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              IELTS Excellence?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven teaching methods 
            to help you achieve your IELTS goals faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-feature border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-glow font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 transition-opacity"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;