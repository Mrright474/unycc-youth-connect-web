
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, RefreshCcw } from "lucide-react";

interface Member {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  age_group: string;
  interest: string;
  status: string;
  created_at: string;
}

const AdminMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { toast } = useToast();

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching members:', error);
      toast({
        title: "Error",
        description: "Failed to fetch members data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredMembers = members.filter(member => 
    member.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateMemberStatus = async (memberId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('members')
        .update({ status: newStatus })
        .eq('id', memberId);
      
      if (error) throw error;
      
      toast({
        title: "Status Updated",
        description: "Member status has been updated successfully",
      });
      
      fetchMembers(); // Refresh the member list
    } catch (error) {
      console.error('Error updating member status:', error);
      toast({
        title: "Error",
        description: "Failed to update member status",
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
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={fetchMembers} variant="outline" className="w-full md:w-auto">
          <RefreshCcw size={16} className="mr-2" /> Refresh
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading members data...</div>
      ) : filteredMembers.length === 0 ? (
        <div className="text-center py-8">No members found</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">
                    {member.first_name} {member.last_name}
                  </h3>
                  <Badge className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-1">{member.email}</p>
                <p className="text-gray-600 mb-4">
                  {member.country} | {member.age_group}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">Interest: {member.interest}</Badge>
                  <Badge variant="outline">Joined: {new Date(member.created_at).toLocaleDateString()}</Badge>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {member.status !== "active" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-green-500 border-green-500 hover:bg-green-50"
                      onClick={() => updateMemberStatus(member.id, "active")}
                    >
                      Activate
                    </Button>
                  )}
                  {member.status !== "pending" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-yellow-500 border-yellow-500 hover:bg-yellow-50"
                      onClick={() => updateMemberStatus(member.id, "pending")}
                    >
                      Mark Pending
                    </Button>
                  )}
                  {member.status !== "inactive" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-50"
                      onClick={() => updateMemberStatus(member.id, "inactive")}
                    >
                      Deactivate
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

export default AdminMembers;
