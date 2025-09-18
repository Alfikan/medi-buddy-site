import { Calendar, TestTube, Rocket, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Implementation = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Prototype Development",
      duration: "3-4 months",
      icon: Calendar,
      status: "In Progress",
      activities: [
        "Hardware component integration and testing",
        "Basic sensor calibration and validation",
        "Initial mobile app development",
        "Core medication reminder functionality",
        "Basic health monitoring features",
        "Local data storage implementation"
      ],
      deliverables: [
        "Working prototype device",
        "Basic mobile application",
        "Initial sensor accuracy validation",
        "User interface mockups"
      ]
    },
    {
      phase: "Phase 2",
      title: "Testing & Validation",
      duration: "2-3 months",
      icon: TestTube,
      status: "Planned",
      activities: [
        "Clinical testing with healthcare partners",
        "User experience testing with elderly patients",
        "Security and privacy compliance validation",
        "IoT connectivity stress testing",
        "Emergency alert system verification",
        "Data accuracy and reliability testing"
      ],
      deliverables: [
        "Clinical validation report",
        "Security audit certification",
        "User acceptance testing results",
        "Performance optimization report"
      ]
    },
    {
      phase: "Phase 3",
      title: "Production & Deployment",
      duration: "2-3 months",
      icon: Rocket,
      status: "Future",
      activities: [
        "Manufacturing process optimization",
        "Healthcare provider partnership integration",
        "Large-scale production setup",
        "Market launch preparation",
        "Customer support system deployment",
        "Continuous monitoring and updates"
      ],
      deliverables: [
        "Production-ready devices",
        "Healthcare system integrations",
        "Customer support infrastructure",
        "Market launch strategy"
      ]
    }
  ];

  const milestones = [
    { date: "Q1 2024", milestone: "Prototype Completion", completed: true },
    { date: "Q2 2024", milestone: "Clinical Testing Begins", completed: true },
    { date: "Q3 2024", milestone: "Security Certification", completed: false },
    { date: "Q4 2024", milestone: "Market Launch", completed: false },
    { date: "Q1 2025", milestone: "Healthcare Integration", completed: false }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Implementation Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to bringing MediAssist from concept to market, 
            ensuring quality, safety, and effectiveness at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-gradient-card hover:shadow-card-hover transition-all">
              <div className={`absolute top-0 left-0 w-full h-1 ${
                phase.status === 'In Progress' ? 'bg-primary' : 
                phase.status === 'Planned' ? 'bg-accent' : 'bg-muted'
              }`}></div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{phase.phase}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                    phase.status === 'Planned' ? 'bg-accent/10 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <phase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">{phase.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-feature rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Project Timeline & Milestones</h3>
            <p className="text-white/90">Track our progress toward revolutionizing healthcare technology</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white/20 h-full"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="text-white/80 text-sm">{milestone.date}</div>
                  </div>
                  
                  <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${
                    milestone.completed ? 'bg-white border-white' : 'bg-transparent border-white/40'
                  }`}>
                    {milestone.completed && (
                      <CheckCircle className="absolute -top-1 -left-1 w-6 h-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 pl-8">
                    <div className={`font-medium ${milestone.completed ? 'text-white' : 'text-white/70'}`}>
                      {milestone.milestone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;