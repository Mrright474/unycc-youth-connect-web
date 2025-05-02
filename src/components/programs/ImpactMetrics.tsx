
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ImpactMetrics = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const metrics = [
    { value: "120+", label: "Youth-led Projects", icon: "🌱" },
    { value: "45", label: "Countries Reached", icon: "🌍" },
    { value: "15,000+", label: "Youth Engaged", icon: "👥" },
    { value: "8", label: "SDGs Addressed", icon: "🎯" },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Background image with overlay (partially visible) */}
      <div className="absolute inset-0 z-0 opacity-10">
        {!imageLoaded && <Skeleton className="w-full h-full" />}
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" 
          alt="Youth leadership workshop"
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through our programs and youth-led initiatives, we're making measurable progress 
            on sustainable development goals around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-unblue transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-unblue mb-2">{metric.value}</div>
                <div className="text-sm md:text-base text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
