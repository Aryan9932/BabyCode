import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/ielts-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">Trusted by 10,000+ students</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Achieve Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                IELTS Dreams
              </span>{" "}
              with Expert Guidance
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of successful students who achieved their target IELTS band scores with our 
              comprehensive preparation courses, AI-powered practice tests, and personalized coaching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Take Free Practice Test
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="font-heading text-2xl font-bold text-primary">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-secondary mr-2" />
                  <span className="font-heading text-2xl font-bold text-secondary">8.5</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Band Score</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-accent mr-2" />
                  <span className="font-heading text-2xl font-bold text-accent">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={heroImage}
                alt="IELTS students learning in a modern classroom"
                className="w-full h-[500px] object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-accent text-accent-foreground p-4 rounded-xl shadow-medium animate-float">
              <div className="text-center">
                <div className="font-bold text-lg">Band 9</div>
                <div className="text-xs opacity-90">Achievement</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-sm border border-border p-4 rounded-xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Trophy className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Success Story</div>
                  <div className="text-xs text-muted-foreground">Join 10K+ achievers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;