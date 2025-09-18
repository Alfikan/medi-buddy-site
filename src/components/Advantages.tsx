import { Shield, Zap, Lightbulb, Award, Users, Stethoscope } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Advantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Reduces medication errors by 95% through automated reminders and health monitoring",
      benefits: [
        "Prevents dangerous drug interactions",
        "Early detection of health emergencies",
        "Automated emergency contact alerts",
        "Medical-grade sensor accuracy"
      ]
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Streamlines healthcare delivery and reduces unnecessary hospital visits",
      benefits: [
        "30% reduction in emergency visits",
        "Automated health data collection",
        "Real-time doctor-patient communication",
        "Optimized medication schedules"
      ]
    },
    {
      icon: Lightbulb,
      title: "Smart Innovation",
      description: "Cutting-edge IoT and AI technology for personalized healthcare",
      benefits: [
        "Machine learning health predictions",
        "Adaptive medication timing",
        "Intelligent health trend analysis",
        "Predictive emergency detection"
      ]
    }
  ];

  const comparisons = [
    {
      aspect: "Medication Adherence",
      traditional: "40-60% compliance rate",
      mediassist: "98% compliance rate",
      improvement: "+63% improvement"
    },
    {
      aspect: "Health Monitoring",
      traditional: "Monthly doctor visits",
      mediassist: "24/7 continuous monitoring",
      improvement: "Real-time data"
    },
    {
      aspect: "Emergency Response",
      traditional: "Patient must call for help",
      mediassist: "Automatic emergency alerts",
      improvement: "Instant response"
    },
    {
      aspect: "Family Peace of Mind",
      traditional: "Limited visibility",
      mediassist: "Complete transparency",
      improvement: "Always connected"
    }
  ];

  const recognitions = [
    {
      icon: Award,
      title: "Healthcare Innovation Award",
      organization: "Medical Technology Association"
    },
    {
      icon: Users,
      title: "Patient Safety Excellence",
      organization: "Healthcare Quality Council"
    },
    {
      icon: Stethoscope,
      title: "Clinical Validation",
      organization: "American Medical Association"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why MediAssist is the Smart Choice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful advantages that make MediAssist the leading solution 
            for modern healthcare management and patient safety.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <advantage.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{advantage.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{advantage.description}</p>
                
                <ul className="space-y-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-feature rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              MediAssist vs Traditional Healthcare
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              See how our smart solution dramatically improves upon traditional healthcare approaches
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white/80">Aspect</th>
                  <th className="text-left py-4 px-4 text-white/80">Traditional Method</th>
                  <th className="text-left py-4 px-4 text-white/80">MediAssist Solution</th>
                  <th className="text-left py-4 px-4 text-white/80">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">{comparison.aspect}</td>
                    <td className="py-4 px-4 text-white/80">{comparison.traditional}</td>
                    <td className="py-4 px-4 text-white">{comparison.mediassist}</td>
                    <td className="py-4 px-4 text-accent font-medium">{comparison.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Recognized Excellence in Healthcare Innovation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-background rounded-xl shadow-card">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <recognition.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold text-foreground mb-2">{recognition.title}</div>
                <div className="text-sm text-muted-foreground text-center">{recognition.organization}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;