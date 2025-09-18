import { Brain, Mic, Cloud, Zap, Smartphone, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const FutureScope = () => {
  const futureFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      timeframe: "2025-2026",
      description: "Machine learning algorithms for predictive healthcare analytics",
      features: [
        "Predictive health deterioration alerts",
        "Personalized medication timing optimization",
        "Risk assessment based on health patterns",
        "Automated doctor consultation scheduling"
      ]
    },
    {
      icon: Mic,
      title: "Voice Assistant Integration",
      timeframe: "2025",
      description: "Natural language interaction for enhanced accessibility",
      features: [
        "Voice-activated medication reminders",
        "Spoken health status inquiries",
        "Emergency voice commands",
        "Multi-language support"
      ]
    },
    {
      icon: Cloud,
      title: "Advanced IoT Ecosystem",
      timeframe: "2026-2027",
      description: "Complete smart home healthcare integration",
      features: [
        "Smart home sensor network",
        "Wearable device synchronization",
        "Environmental health monitoring",
        "Automated emergency services integration"
      ]
    }
  ];

  const expansionPlans = [
    {
      icon: Smartphone,
      title: "Telehealth Integration",
      description: "Direct video consultations with healthcare providers through the platform"
    },
    {
      icon: Users,
      title: "Community Health Networks",
      description: "Connect patients with similar conditions for support and shared experiences"
    },
    {
      icon: Zap,
      title: "Rapid Response System",
      description: "Integration with emergency services for immediate medical intervention"
    }
  ];

  const visionStats = [
    { value: "1M+", label: "Patients Served", target: "by 2027" },
    { value: "50+", label: "Healthcare Partners", target: "by 2026" },
    { value: "25", label: "Countries", target: "by 2028" },
    { value: "99.9%", label: "Uptime Target", target: "always" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Future of Smart Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our vision extends beyond today's capabilities. Discover the innovative features 
            and expansions that will revolutionize healthcare in the coming years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {futureFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs px-3 py-1 rounded-bl-lg">
                {feature.timeframe}
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Expanding Healthcare Horizons
            </h3>
            <p className="text-muted-foreground mb-8">
              Beyond our core platform, we're developing complementary services 
              that will create a comprehensive healthcare ecosystem.
            </p>
            
            <div className="space-y-6">
              {expansionPlans.map((plan, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <plan.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{plan.title}</h4>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-feature rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our 2030 Vision</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {visionStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm mb-1">{stat.label}</div>
                  <div className="text-white/60 text-xs">{stat.target}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/90 mb-6">
                "Making healthcare accessible, predictive, and personalized for everyone, everywhere."
              </p>
              <Button variant="secondary" size="sm">
                Join Our Journey
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Partner With the Future
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of healthcare technology. Whether you're a 
              healthcare provider, technology partner, or investor, let's build tomorrow together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Healthcare Partnerships
              </Button>
              <Button variant="outline" size="lg">
                Investment Opportunities
              </Button>
              <Button variant="outline" size="lg">
                Technology Collaboration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;