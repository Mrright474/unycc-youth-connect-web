
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminMembers from "@/components/admin/AdminMembers";
import AdminClubs from "@/components/admin/AdminClubs";
import AdminLogin from "@/components/admin/AdminLogin";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if admin is logged in and verify connection
  useEffect(() => {
    const verifyAdmin = async () => {
      setIsVerifying(true);
      const adminToken = localStorage.getItem("admin_token");
      
      if (adminToken) {
        try {
          // Test a simple query to verify connection
          const { error } = await supabase.from('members').select('count', { count: 'exact' });
          
          if (error) {
            console.error("Supabase connection error:", error);
            toast({
              title: "Connection Error",
              description: "Could not verify database connection. Please try again.",
              variant: "destructive",
            });
          } else {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Admin verification error:", error);
        }
      }
      
      setIsVerifying(false);
    };
    
    verifyAdmin();
  }, [toast]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            {isAuthenticated && (
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

          {isVerifying ? (
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-unblue border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Verifying admin access...</p>
            </div>
          ) : !isAuthenticated ? (
            <AdminLogin onLogin={() => setIsAuthenticated(true)} />
          ) : (
            <Tabs defaultValue="members" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="clubs">Clubs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="members">
                <AdminMembers />
              </TabsContent>
              
              <TabsContent value="clubs">
                <AdminClubs />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
