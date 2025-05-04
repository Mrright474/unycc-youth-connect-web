
const impactData = [
  { 
    figure: "5,000+", 
    description: "Youth leaders trained and empowered",
    color: "bg-unblue/10" 
  },
  { 
    figure: "25+", 
    description: "Countries with active UNYCC programs",
    color: "bg-unblue/15" 
  },
  { 
    figure: "100+", 
    description: "Community projects implemented",
    color: "bg-unblue/20" 
  },
  { 
    figure: "250K+", 
    description: "People impacted through our initiatives",
    color: "bg-unblue/25" 
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
            <div key={index} className={`${item.color} p-8 rounded-lg text-center`}>
              <p className="text-4xl font-bold text-unblue mb-2">{item.figure}</p>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">How Your Donation Makes a Difference</h3>
          <ul className="text-left space-y-3">
            <li className="flex items-baseline">
              <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
              <span>$25 can provide educational materials for youth in underserved communities</span>
            </li>
            <li className="flex items-baseline">
              <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
              <span>$50 can support a youth climate action workshop</span>
            </li>
            <li className="flex items-baseline">
              <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
              <span>$100 can fund leadership training for 5 young community leaders</span>
            </li>
            <li className="flex items-baseline">
              <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
              <span>$250 can launch a community development project</span>
            </li>
            <li className="flex items-baseline">
              <span className="h-2 w-2 rounded-full bg-unblue mr-2 mt-2"></span>
              <span>$500 can establish a new youth club in an underrepresented region</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
