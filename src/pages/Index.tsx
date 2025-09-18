import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Technologies from "@/components/Technologies";
import Implementation from "@/components/Implementation";
import Advantages from "@/components/Advantages";
import FutureScope from "@/components/FutureScope";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Technologies />
      <Implementation />
      <Advantages />
      <FutureScope />
      <Footer />
    </div>
  );
};

export default Index;
