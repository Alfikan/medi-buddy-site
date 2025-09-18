import { Button } from "./ui/button";
import { ArrowRight, Shield, Heart, Smartphone } from "lucide-react";
import deviceImage from "@/assets/mediassist-device.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.8), rgba(0, 102, 204, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6">
              <Shield className="mr-2 h-4 w-4" />
              Healthcare Innovation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              MediAssist
              <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
                Smart Medicine Reminder & Health Monitoring
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Revolutionary IoT device that ensures medication adherence and continuous health monitoring 
              for elderly and chronically ill patients, providing peace of mind for families and caregivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                View Features
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="flex items-center text-white/80">
                <Heart className="h-5 w-5 mr-2" />
                <span className="text-sm">Health Monitoring</span>
              </div>
              <div className="flex items-center text-white/80">
                <Smartphone className="h-5 w-5 mr-2" />
                <span className="text-sm">Mobile Alerts</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-feature">
              <img
                src={deviceImage}
                alt="MediAssist Smart Device"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-card-hover">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Medication Adherence</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-card-hover">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Health Monitoring</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;