
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Global Youth Climate Summit 2024",
      date: "2024-07-15",
      time: "09:00 AM UTC",
      location: "Kampala, Uganda & Virtual",
      description: "Join youth leaders from around the world to discuss climate action and sustainable development solutions.",
      attendees: 500,
      type: "Conference",
      registrationOpen: true
    },
    {
      id: 2,
      title: "SDG Workshop Series: Sustainable Cities",
      date: "2024-06-25",
      time: "14:00 PM UTC",
      location: "Virtual",
      description: "Interactive workshop focusing on SDG 11 - Sustainable Cities and Communities. Learn practical approaches to urban sustainability.",
      attendees: 150,
      type: "Workshop",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Youth Leadership Training Program",
      date: "2024-07-01",
      time: "10:00 AM UTC",
      location: "Nairobi, Kenya",
      description: "Intensive leadership training for young changemakers focusing on project management and community engagement.",
      attendees: 75,
      type: "Training",
      registrationOpen: true
    }
  ];

  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our events and connect with young leaders from around the world working towards sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white">
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
                <p className="text-gray-600 mb-4">{event.description}</p>
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

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
