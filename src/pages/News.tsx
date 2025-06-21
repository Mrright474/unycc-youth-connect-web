import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allNews = [
    {
      id: 1,
      title: "UNYCC Launches Climate Action Initiative in 15 New Countries",
      excerpt: "Our youth-led climate action program expands to reach more communities worldwide, focusing on sustainable development and environmental protection.",
      content: "UNYCC is proud to announce the expansion of our climate action initiative to 15 new countries across Africa, Asia, and Latin America. This groundbreaking program empowers young people to lead environmental projects in their communities...",
      date: "2024-06-08",
      author: "UNYCC Communications",
      image: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
      category: "Climate Action",
      featured: true
    },
    {
      id: 2,
      title: "Global Youth Summit 2024: Empowering Tomorrow's Leaders",
      excerpt: "Join us for our annual Global Youth Summit where young leaders from around the world will gather to discuss sustainable development goals.",
      content: "The Global Youth Summit 2024 will bring together over 500 young leaders from 75 countries to collaborate on solutions for the world's most pressing challenges...",
      date: "2024-06-05",
      author: "Events Team",
      image: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
      category: "Events",
      featured: true
    },
    {
      id: 3,
      title: "New Partnership with UN Youth Programme Announced",
      excerpt: "UNYCC proudly announces a strategic partnership with the UN Youth Programme to enhance youth participation in global decision-making.",
      content: "This strategic partnership will create new opportunities for young people to engage in policy-making processes and contribute to global governance...",
      date: "2024-06-01",
      author: "Ben Kazigo Luweru",
      image: "/lovable-uploads/24b0ae3b-a291-4b67-8d6d-4af0b0930366.png",
      category: "Partnerships",
      featured: false
    },
    {
      id: 4,
      title: "UNYCC Members Launch Clean Water Project in Rural Uganda",
      excerpt: "Local UNYCC club successfully implements clean water access project, providing safe drinking water to over 1,000 community members.",
      content: "The Kampala UNYCC club has successfully completed a clean water project that now serves over 1,000 people in rural communities outside Kampala...",
      date: "2024-05-28",
      author: "Katamba Collins Mark",
      image: "/lovable-uploads/89049959-a452-49e9-b37c-52c673ae30bb.png",
      category: "Projects",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Watermark Logo */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/ff7fc504-d57f-4296-9405-802d4ebb657b.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '40%',
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-unblue text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
                  <Link to="/" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">UNYCC News</h1>
              <p className="text-xl text-unblue-light max-w-3xl">
                Stay updated with the latest developments, success stories, and initiatives from our global network of young leaders.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search news articles..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["All", "Climate Action", "Events", "Partnerships", "Projects"].map((category) => (
                    <Button 
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {allNews.filter(article => article.featured).map((article) => (
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
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* All Articles */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow bg-white">
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
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span className="text-xs">{article.author}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-unblue hover:text-unblue-dark text-xs">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default News;
