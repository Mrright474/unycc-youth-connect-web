
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, BookOpen, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "UNYCC Club Starter Guide",
      description: "Complete guide to starting and managing a UNYCC club in your community.",
      type: "PDF Guide",
      icon: FileText,
      downloadUrl: "#",
      size: "2.5 MB"
    },
    {
      id: 2,
      title: "SDG Implementation Toolkit",
      description: "Practical tools and frameworks for implementing SDG projects at the local level.",
      type: "Toolkit",
      icon: BookOpen,
      downloadUrl: "#",
      size: "8.1 MB"
    },
    {
      id: 3,
      title: "Youth Leadership Webinar Series",
      description: "Recorded webinars on leadership skills, project management, and community engagement.",
      type: "Video Series",
      icon: Video,
      downloadUrl: "#",
      size: "Various"
    },
    {
      id: 4,
      title: "Grant Writing Workshop Materials",
      description: "Templates and guides for writing successful grant proposals for youth-led projects.",
      type: "Templates",
      icon: FileText,
      downloadUrl: "#",
      size: "1.8 MB"
    },
    {
      id: 5,
      title: "Community Engagement Best Practices",
      description: "Research-based strategies for effective community engagement and partnership building.",
      type: "Research Paper",
      icon: BookOpen,
      downloadUrl: "#",
      size: "3.2 MB"
    },
    {
      id: 6,
      title: "UNYCC Brand Guidelines",
      description: "Official brand guidelines, logos, and visual identity materials for UNYCC clubs.",
      type: "Brand Kit",
      icon: FileText,
      downloadUrl: "#",
      size: "12.5 MB"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access guides, toolkits, and materials to support your UNYCC activities and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-unblue/10 rounded-lg">
                    <resource.icon className="w-6 h-6 text-unblue" />
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.size}</span>
                  <Button size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Looking for more resources or have suggestions for new materials?
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Contact Our Resource Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
