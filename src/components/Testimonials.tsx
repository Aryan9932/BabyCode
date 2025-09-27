import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Canada",
      score: "8.5",
      content: "IELTS Excellence transformed my preparation completely. The AI speaking practice helped me overcome my fear of speaking, and I achieved my target band score on the first attempt!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ahmed Hassan",
      location: "UAE",
      score: "8.0",
      content: "The mock tests were incredibly accurate - my actual IELTS score was exactly what the platform predicted. The detailed feedback helped me focus on my weak areas effectively.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      location: "Mexico",
      score: "7.5",
      content: "As a working professional, I loved the flexibility of online preparation. The study materials are comprehensive and the progress tracking kept me motivated throughout.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Success Stories from Our{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Students
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their 
            IELTS journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-gradient-feature border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-2" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full">
                    <span className="font-bold text-sm">Band {testimonial.score}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl text-center animate-fade-in">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Start your IELTS preparation today and become our next success story. 
              Join thousands of students who achieved their dreams with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
                Start Free Trial
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                View All Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;