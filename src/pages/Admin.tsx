
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminMembers from "@/components/admin/AdminMembers";
import AdminClubs from "@/components/admin/AdminClubs";
import SecureAdminLogin from "@/components/admin/SecureAdminLogin";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-8">
            <div className="animate-spin h-8 w-8 border-4 border-unblue border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            {user && isAdmin && (
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

          {!user || !isAdmin ? (
            <SecureAdminLogin />
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
