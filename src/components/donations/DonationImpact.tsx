
import { Card, CardContent } from "@/components/ui/card";

const impactData = [
  { 
    figure: "5,000+", 
    description: "Youth leaders trained and empowered",
    color: "bg-unblue/10",
    icon: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png"
  },
  { 
    figure: "25+", 
    description: "Countries with active UNYCC programs",
    color: "bg-unblue/15",
    icon: "/lovable-uploads/9be39adb-395c-4a89-b163-3d842cf95a09.png"
  },
  { 
    figure: "100+", 
    description: "Community projects implemented",
    color: "bg-unblue/20",
    icon: "/lovable-uploads/38d71279-24da-43e3-a208-757cc8ea7eb0.png"
  },
  { 
    figure: "250K+", 
    description: "People impacted through our initiatives",
    color: "bg-unblue/25",
    icon: "/lovable-uploads/71de3a9f-b354-4926-8c9a-a4d45eb3374.png"
  },
];

const DonationImpact = () => {
  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When you donate to UNYCC, you're directly supporting youth-led initiatives that 
            create meaningful change in communities around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <Card key={index} className={`${item.color} border-none shadow-sm hover:shadow-md transition-all`}>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-white/80 p-2 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.description}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="text-4xl font-bold text-unblue mb-2">{item.figure}</p>
                <p className="text-lg text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">How Your Donation Makes a Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$25 can provide educational materials for youth in underserved communities</span>
              </div>
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$50 can support a youth climate action workshop</span>
              </div>
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$100 can fund leadership training for 5 young community leaders</span>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$250 can launch a community development project</span>
              </div>
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$500 can establish a new youth club in an underrepresented region</span>
              </div>
              <div className="flex items-baseline">
                <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
                <span>$1000 can fund a regional youth leadership conference</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
