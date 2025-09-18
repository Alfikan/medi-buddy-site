import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Technology", href: "#technology" },
        { name: "Implementation", href: "#implementation" },
        { name: "Future Scope", href: "#future" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Contact Support", href: "#support" },
        { name: "Healthcare Providers", href: "#providers" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "HIPAA Compliance", href: "#hipaa" },
        { name: "Security", href: "#security" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@mediassist.health",
      href: "mailto:info@mediassist.health"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Healthcare Innovation Dr, Medical City, HC 12345",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MediAssist</span>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Revolutionizing healthcare through smart technology. Making medication management 
              and health monitoring accessible, reliable, and intelligent for everyone.
            </p>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <contact.icon className="h-4 w-4 text-primary group-hover:text-white" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest updates on MediAssist features, healthcare insights, and industry news.
              </p>
            </div>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-primary"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>© 2024 MediAssist. All rights reserved.</span>
              <span>•</span>
              <span>Made with ❤️ for better healthcare</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>🔒 HIPAA Compliant</span>
              <span>🛡️ Medical Grade Security</span>
              <span>✅ FDA Approved Sensors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;