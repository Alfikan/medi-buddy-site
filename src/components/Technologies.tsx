import { Cpu, Zap, Smartphone, Wifi, Activity, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Technologies = () => {
  const techStack = [
    {
      category: "Hardware Platform",
      icon: Cpu,
      technologies: [
        { name: "Arduino Uno/Nano", description: "Main microcontroller for device logic" },
        { name: "ESP32", description: "Wi-Fi and Bluetooth connectivity" },
        { name: "LCD Display", description: "Patient-friendly interface" },
        { name: "Real-time Clock", description: "Precise medication timing" }
      ]
    },
    {
      category: "Biomedical Sensors",
      icon: Activity,
      technologies: [
        { name: "MAX30102", description: "SpO₂ and heart rate monitoring" },
        { name: "DS18B20", description: "Temperature measurement" },
        { name: "Load Cell", description: "Medication weight detection" },
        { name: "PIR Sensor", description: "Patient presence detection" }
      ]
    },
    {
      category: "Alert Systems",
      icon: Zap,
      technologies: [
        { name: "Buzzer Module", description: "Audio medication reminders" },
        { name: "LED Indicators", description: "Visual alert system" },
        { name: "Vibration Motor", description: "Tactile notifications" },
        { name: "Emergency Button", description: "Panic alert system" }
      ]
    },
    {
      category: "Connectivity",
      icon: Wifi,
      technologies: [
        { name: "Wi-Fi Module", description: "Internet connectivity for data sync" },
        { name: "Bluetooth 5.0", description: "Mobile app communication" },
        { name: "GSM Module", description: "Emergency SMS notifications" },
        { name: "LoRaWAN", description: "Long-range communication backup" }
      ]
    },
    {
      category: "Mobile Application",
      icon: Smartphone,
      technologies: [
        { name: "Java/Kotlin", description: "Native Android development" },
        { name: "Firebase", description: "Real-time database and analytics" },
        { name: "Material Design", description: "Intuitive user interface" },
        { name: "Push Notifications", description: "Instant health alerts" }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      technologies: [
        { name: "AES Encryption", description: "Data security and privacy" },
        { name: "HIPAA Compliance", description: "Healthcare data protection" },
        { name: "SSL/TLS", description: "Secure data transmission" },
        { name: "OAuth 2.0", description: "Secure authentication" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built with industry-leading technologies to ensure reliability, security, and seamless 
            integration with existing healthcare infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <category.icon className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group/tech">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover/tech:text-primary transition-colors">
                            {tech.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tech.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-feature rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Our Technology Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-white/90">
                    <strong>Medical-grade sensors</strong> ensure accurate health monitoring comparable to hospital equipment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-white/90">
                    <strong>Enterprise security</strong> protects sensitive health data with bank-level encryption
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-white/90">
                    <strong>Scalable architecture</strong> supports integration with major healthcare systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="text-white/90">
                    <strong>Open standards</strong> ensure compatibility and future-proof design
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-white/80">System Uptime</div>
              </div>
              <div className="mt-8 text-sm text-white/70">
                Tested and validated in clinical environments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;