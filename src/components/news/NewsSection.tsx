
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "UNYCC Launches Climate Action Initiative in 15 New Countries",
      excerpt: "Our youth-led climate action program expands to reach more communities worldwide, focusing on sustainable development and environmental protection.",
      date: "2024-06-08",
      author: "UNYCC Communications",
      image: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
      category: "Climate Action"
    },
    {
      id: 2,
      title: "Global Youth Summit 2024: Empowering Tomorrow's Leaders",
      excerpt: "Join us for our annual Global Youth Summit where young leaders from around the world will gather to discuss sustainable development goals.",
      date: "2024-06-05",
      author: "Events Team",
      image: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
      category: "Events"
    },
    {
      id: 3,
      title: "New Partnership with UN Youth Programme Announced",
      excerpt: "UNYCC proudly announces a strategic partnership with the UN Youth Programme to enhance youth participation in global decision-making.",
      date: "2024-06-01",
      author: "Ben Kazigo Luweru",
      image: "/lovable-uploads/24b0ae3b-a291-4b67-8d6d-4af0b0930366.png",
      category: "Partnerships"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, initiatives, and success stories from UNYCC's global network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="bg-unblue/10 text-unblue px-2 py-1 rounded-full text-xs">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-unblue hover:text-unblue-dark">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
