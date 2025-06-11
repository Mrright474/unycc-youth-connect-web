
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      id: 1,
      title: "Global Youth Climate Summit 2024",
      date: "2024-07-15",
      time: "09:00 AM UTC",
      location: "Kampala, Uganda & Virtual",
      description: "Join youth leaders from around the world to discuss climate action and sustainable development solutions. This summit will feature keynote speakers, workshops, and networking opportunities.",
      attendees: 500,
      type: "Conference",
      registrationOpen: true,
      featured: true
    },
    {
      id: 2,
      title: "SDG Workshop Series: Sustainable Cities",
      date: "2024-06-25",
      time: "14:00 PM UTC",
      location: "Virtual",
      description: "Interactive workshop focusing on SDG 11 - Sustainable Cities and Communities. Learn practical approaches to urban sustainability and smart city initiatives.",
      attendees: 150,
      type: "Workshop",
      registrationOpen: true,
      featured: false
    },
    {
      id: 3,
      title: "Youth Leadership Training Program",
      date: "2024-07-01",
      time: "10:00 AM UTC",
      location: "Nairobi, Kenya",
      description: "Intensive leadership training for young changemakers focusing on project management, team building, and community engagement strategies.",
      attendees: 75,
      type: "Training",
      registrationOpen: true,
      featured: true
    },
    {
      id: 4,
      title: "Regional Youth Forum - West Africa",
      date: "2024-06-30",
      time: "11:00 AM UTC",
      location: "Accra, Ghana",
      description: "Regional forum bringing together UNYCC clubs from West African countries to share experiences and plan collaborative projects.",
      attendees: 200,
      type: "Forum",
      registrationOpen: true,
      featured: false
    },
    {
      id: 5,
      title: "Digital Skills for Youth Development",
      date: "2024-07-10",
      time: "15:00 PM UTC",
      location: "Virtual",
      description: "Online training session covering digital literacy, social media for advocacy, and online project management tools for youth organizations.",
      attendees: 300,
      type: "Training",
      registrationOpen: true,
      featured: false
    }
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.type.toLowerCase() === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UNYCC Events</h1>
            <p className="text-xl text-unblue-light max-w-3xl">
              Join our global community through workshops, conferences, and training programs designed to empower young leaders.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter by type:</span>
              </div>
              {["all", "conference", "workshop", "training", "forum"].map((filter) => (
                <Button 
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="capitalize"
                >
                  {filter === "all" ? "All Events" : filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {events.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-unblue text-white px-3 py-1 rounded-full text-sm">
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-unblue" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-unblue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-unblue" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <Button 
                      className="w-full" 
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? "Register Now" : "Registration Closed"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">
              {activeFilter === "all" ? "All Events" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Events`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-unblue text-white px-3 py-1 rounded-full text-sm">
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-unblue" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-unblue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-unblue" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                    <Button 
                      size="sm"
                      className="w-full" 
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? "Register" : "Closed"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
