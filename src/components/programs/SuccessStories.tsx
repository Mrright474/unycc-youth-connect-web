
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SuccessStories = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  const stories = [
    {
      title: "Clean Water Initiative in Tanzania",
      description: "Youth-led project providing clean water access to 5 rural communities, impacting over 2,000 people.",
      image: "https://images.unsplash.com/photo-1616514867902-0ab7c40eac0d?q=80&w=800&auto=format&fit=crop",
      link: "/programs/water-initiative"
    },
    {
      title: "Digital Skills Program in Mexico",
      description: "Teaching essential tech skills to underserved youth, leading to a 40% increase in employment opportunities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      link: "/programs/digital-skills"
    },
    {
      title: "Climate Action in Philippines",
      description: "Youth-led coastal cleanup and reforestation project that planted 5,000 mangrove trees.",
      image: "https://images.unsplash.com/photo-1621451527847-0c78b7c4c783?q=80&w=800&auto=format&fit=crop",
      link: "/programs/climate-action"
    }
  ];

  return (
    <section className="py-16 bg-ungray-light" id="success-stories">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real impact created by youth through our programs and initiatives around the world.
          </p>
        </div>

        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-60 md:h-auto">
                    {!imagesLoaded[index] && (
                      <Skeleton className="absolute inset-0" />
                    )}
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      style={{ display: imagesLoaded[index] ? 'block' : 'none' }}
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{story.title}</h3>
                      <p className="text-gray-600 mb-6">{story.description}</p>
                    </div>
                    <Button className="self-start" variant="outline" asChild>
                      <Link to={story.link}>
                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
