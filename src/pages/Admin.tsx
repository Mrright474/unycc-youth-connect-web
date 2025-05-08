
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminMembers from "@/components/admin/AdminMembers";
import AdminClubs from "@/components/admin/AdminClubs";
import AdminLogin from "@/components/admin/AdminLogin";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const adminToken = localStorage.getItem("admin_token");
    if (adminToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
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

          {!isAuthenticated ? (
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
