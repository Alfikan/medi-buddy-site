import { Bell, Heart, Smartphone, Wifi, AlertCircle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Solution = () => {
  const features = [
    {
      icon: Bell,
      title: "Smart Medicine Reminder",
      description: "Automated buzzer and LED alerts ensure patients never miss their medications",
      details: [
        "Programmable medication schedules",
        "Visual and audio alerts",
        "Missed dose notifications",
        "Emergency caregiver alerts"
      ]
    },
    {
      icon: Heart,
      title: "Real-time Health Monitoring",
      description: "Continuous tracking of vital signs including SpO₂, heart rate, and temperature",
      details: [
        "SpO₂ (blood oxygen) monitoring",
        "Heart rate tracking",
        "Body temperature measurement",
        "Trend analysis and alerts"
      ]
    },
    {
      icon: Smartphone,
      title: "Caregiver Mobile App",
      description: "Keep family members and healthcare providers connected and informed",
      details: [
        "Real-time health data access",
        "Medication adherence reports",
        "Emergency notifications",
        "Doctor appointment reminders"
      ]
    },
    {
      icon: Wifi,
      title: "IoT Connectivity",
      description: "Seamless integration with healthcare systems and emergency services",
      details: [
        "Bluetooth and Wi-Fi enabled",
        "Cloud data backup",
        "Healthcare provider integration",
        "Emergency service alerts"
      ]
    }
  ];

  const benefits = [
    {
      icon: Activity,
      title: "Improved Health Outcomes",
      value: "98% medication adherence rate"
    },
    {
      icon: AlertCircle,
      title: "Early Warning System",
      value: "Prevents 90% of emergencies"
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      value: "24/7 monitoring & alerts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Smart Healthcare Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MediAssist combines cutting-edge IoT technology with healthcare expertise to create 
            a complete medication management and health monitoring ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-feature rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Proven Results That Matter
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our smart solution delivers measurable improvements in patient outcomes and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">{benefit.value}</div>
                <div className="text-white/80">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Healthcare?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the revolution in smart healthcare technology and give your loved ones the care they deserve.
          </p>
          <Button size="lg" className="mr-4">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;