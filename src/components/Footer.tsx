import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Practice Tests", href: "#tests" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  const courses = [
    { name: "IELTS Academic", href: "#academic" },
    { name: "IELTS General", href: "#general" },
    { name: "Speaking Practice", href: "#speaking" },
    { name: "Writing Correction", href: "#writing" },
    { name: "Mock Tests", href: "#mock" },
    { name: "One-on-One Coaching", href: "#coaching" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                IELTS Excellence
              </span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering students worldwide to achieve their IELTS dreams with innovative learning 
              solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">123 Education Street</p>
                  <p className="text-background/70">Learning District, ED 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@ieltsexcellence.com" 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  info@ieltsexcellence.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-accent rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Get Started Today!</h4>
              <p className="text-accent-foreground/90 text-sm mb-3">
                Book your free consultation and assessment.
              </p>
              <button className="bg-background text-foreground px-4 py-2 rounded font-medium text-sm hover:bg-background/90 transition-colors w-full">
                Book Free Session
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 IELTS Excellence. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;