
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, RefreshCcw, School, MapPin, Users } from "lucide-react";
import { exportToCSV, formatDataForExport } from "@/lib/exportUtils";

interface Club {
  id: string;
  institution_name: string;
  institution_type: string;
  contact_name: string;
  contact_email: string;
  country: string;
  city: string;
  members_estimate: number;
  reason: string;
  status: string;
  created_at: string;
}

const AdminClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { toast } = useToast();

  const handleExport = () => {
    const exportData = formatDataForExport(filteredClubs, ['id']);
    exportToCSV(exportData, 'club_applications');
    
    toast({
      title: 'Success',
      description: 'Clubs exported successfully',
    });
  };

  const fetchClubs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clubs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClubs(data || []);
    } catch (error) {
      console.error('Error fetching clubs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch clubs data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredClubs = clubs.filter(club => 
    club.institution_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateClubStatus = async (clubId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('clubs')
        .update({ status: newStatus })
        .eq('id', clubId);
      
      if (error) throw error;
      
      toast({
        title: "Status Updated",
        description: "Club status has been updated successfully",
      });
      
      fetchClubs(); // Refresh the clubs list
    } catch (error) {
      console.error('Error updating club status:', error);
      toast({
        title: "Error",
        description: "Failed to update club status",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Search clubs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={fetchClubs} variant="outline" className="w-full md:w-auto">
          <RefreshCcw size={16} className="mr-2" /> Refresh
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading clubs data...</div>
      ) : filteredClubs.length === 0 ? (
        <div className="text-center py-8">No clubs found</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <School className="h-5 w-5 text-unblue" />
                    <h3 className="font-semibold text-lg">{club.institution_name}</h3>
                  </div>
                  <Badge className={getStatusColor(club.status)}>
                    {club.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-600">Contact: {club.contact_name}</p>
                    <p className="text-gray-600">Email: {club.contact_email}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <p className="text-gray-600">{club.city}, {club.country}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <p className="text-gray-600">{club.members_estimate} estimated members</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Why they want to start a club:</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded max-h-20 overflow-y-auto">
                      {club.reason}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">{club.institution_type}</Badge>
                  <Badge variant="outline">Applied: {new Date(club.created_at).toLocaleDateString()}</Badge>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {club.status !== "approved" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-green-500 border-green-500 hover:bg-green-50"
                      onClick={() => updateClubStatus(club.id, "approved")}
                    >
                      Approve
                    </Button>
                  )}
                  {club.status !== "pending" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-yellow-500 border-yellow-500 hover:bg-yellow-50"
                      onClick={() => updateClubStatus(club.id, "pending")}
                    >
                      Mark Pending
                    </Button>
                  )}
                  {club.status !== "rejected" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-50"
                      onClick={() => updateClubStatus(club.id, "rejected")}
                    >
                      Reject
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminClubs;
