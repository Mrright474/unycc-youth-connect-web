
import { useState, useEffect, useRef } from "react";

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

const StatCounter = ({ label, value, suffix = "", duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const increment = end / 100;
    const stepTime = Math.abs(Math.floor(duration / 100));
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, stepTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [isVisible, value, duration]);
  
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-unblue mb-2">
        <span ref={countRef}>{count}</span>{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Countries", value: 75, suffix: "+" },
    { label: "Active Clubs", value: 1250, suffix: "+" },
    { label: "Youth Members", value: 25000, suffix: "+" },
    { label: "Projects Completed", value: 3600, suffix: "+" },
  ];
  
  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UNYCC continues to grow and make a difference around the world through our network of youth leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
