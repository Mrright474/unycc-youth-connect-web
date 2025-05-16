
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, RefreshCcw, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "connected" | "error">("checking");
  const { toast } = useToast();

  const fetchMembers = async (retry = 0) => {
    setLoading(true);
    setError(null);
    setConnectionStatus("checking");
    
    try {
      // Get admin token from localStorage
      const adminToken = localStorage.getItem("admin_token");
      if (!adminToken) {
        throw new Error("Admin authentication required");
      }

      // Test connection to Supabase
      const { error: pingError } = await supabase.from('members').select('count');
      if (pingError) throw pingError;
      
      setConnectionStatus("connected");
      
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setMembers(data || []);
      if (error) {
        console.error("Supabase error details:", error);
        throw error;
      }
    } catch (error: any) {
      console.error('Error fetching members:', error);
      
      setConnectionStatus("error");
      
      // Implement retry with exponential backoff
      if (retry < 3) {
        setError(`Connection issue. Retrying (${retry + 1}/3)...`);
        const backoffTime = Math.pow(2, retry) * 1000; // Exponential backoff: 1s, 2s, 4s
        setTimeout(() => {
          setRetryCount(retry + 1);
          fetchMembers(retry + 1);
        }, backoffTime);
      } else {
        setError(`Failed to load members: ${error.message || 'Unknown error'}`);
        toast({
          title: "Error",
          description: "Failed to fetch members data after multiple attempts",
          variant: "destructive",
        });
      }
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
      // Get admin token from localStorage
      const adminToken = localStorage.getItem("admin_token");
      if (!adminToken) {
        throw new Error("Admin authentication required");
      }
      
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
    } catch (error: any) {
      console.error('Error updating member status:', error);
      toast({
        title: "Error",
        description: `Failed to update member status: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const renderConnectionStatus = () => {
    if (connectionStatus === "connected") {
      return (
        <Alert className="bg-green-50 border-green-200 mb-6">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>Connected</AlertTitle>
          <AlertDescription>
            Successfully connected to Supabase database.
          </AlertDescription>
        </Alert>
      );
    }
    
    if (connectionStatus === "error") {
      return (
        <Alert className="bg-red-50 border-red-200 mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Connection Error</AlertTitle>
          <AlertDescription>
            <p className="mb-2">{error}</p>
            <p>Possible causes:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Network connectivity issues</li>
              <li>CORS policy restrictions</li>
              <li>Row-Level Security (RLS) policy restrictions</li>
              <li>Temporary Supabase service disruption</li>
            </ul>
          </AlertDescription>
        </Alert>
      );
    }
    
    return null;
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
        <Button 
          onClick={() => fetchMembers()} 
          variant="outline" 
          className="w-full md:w-auto"
        >
          <RefreshCcw size={16} className="mr-2" /> Refresh
        </Button>
      </div>

      {renderConnectionStatus()}

      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredMembers.length === 0 && !error ? (
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
