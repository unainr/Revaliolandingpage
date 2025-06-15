import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const FooterComponent = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Site name */}
          <div className="text-2xl font-bold text-primary">
            Revalio
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground">
            © 2025 Revalio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;