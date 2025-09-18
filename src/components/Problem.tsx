import { AlertTriangle, Users, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Problem = () => {
  const stats = [
    {
      icon: Users,
      value: "50M+",
      label: "Elderly patients worldwide",
      description: "struggle with medication management"
    },
    {
      icon: TrendingDown,
      value: "40-60%",
      label: "Non-adherence rate",
      description: "in chronic disease patients"
    },
    {
      icon: Clock,
      value: "125,000",
      label: "Deaths annually",
      description: "due to medication non-adherence"
    },
    {
      icon: AlertTriangle,
      value: "$100B+",
      label: "Healthcare costs",
      description: "from preventable complications"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Critical Problem We're Solving
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Medication non-adherence is a silent epidemic affecting millions of elderly and chronically ill patients, 
            leading to preventable hospitalizations, complications, and deaths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Key Challenges Patients Face
            </h3>
            <div className="space-y-4">
              {[
                "Forgetting to take medications at the right time",
                "Lack of real-time health monitoring between doctor visits",
                "Inadequate support systems for independent living",
                "Family members unable to monitor patient health remotely",
                "Complex medication schedules with multiple prescriptions",
                "No immediate alerts for health emergencies"
              ].map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-feature rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Result?</h3>
            <div className="space-y-4">
              <p className="text-white/90">
                Poor medication adherence leads to:
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Increased hospitalizations</li>
                <li>• Disease progression</li>
                <li>• Higher healthcare costs</li>
                <li>• Reduced quality of life</li>
                <li>• Family stress and worry</li>
              </ul>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-white/90">
                  <strong>It's time for a smart, comprehensive solution.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;