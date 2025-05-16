
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCcw } from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if admin is logged in and verify connection
  useEffect(() => {
    const verifyAdmin = async () => {
      setIsVerifying(true);
      setConnectionError(null);
      const adminToken = localStorage.getItem("admin_token");
      
      if (adminToken) {
        try {
          // Test a simple query with explicit timeout handling
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
          
          const { error } = await supabase.from('members').select('count', { count: 'exact' }).abortSignal(controller.signal);
          
          clearTimeout(timeoutId);
          
          if (error) {
            console.error("Supabase connection error:", error);
            throw error;
          } else {
            setIsAuthenticated(true);
            setConnectionError(null);
          }
        } catch (error: any) {
          console.error("Admin verification error:", error);
          
          // Implement retry with exponential backoff
          if (retryCount < 3) {
            const backoffTime = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
            setConnectionError(`Connection issue. Retrying (${retryCount + 1}/3)...`);
            
            setTimeout(() => {
              setRetryCount(retryCount + 1);
            }, backoffTime);
          } else {
            setConnectionError(error.message || "Failed to connect to database");
            toast({
              title: "Connection Error",
              description: "Could not verify database connection. Please try again later.",
              variant: "destructive",
            });
          }
        }
      }
      
      setIsVerifying(false);
    };
    
    verifyAdmin();
  }, [retryCount, toast]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const handleRetry = () => {
    setRetryCount(0);
    setIsVerifying(true);
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

          {connectionError && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Connection Error</AlertTitle>
              <AlertDescription>
                <p className="mb-2">{connectionError}</p>
                <p>This could be due to:</p>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  <li>Network connectivity issues</li>
                  <li>CORS policy restrictions</li>
                  <li>Row-Level Security (RLS) policy restrictions</li>
                  <li>Temporary Supabase service disruption</li>
                </ul>
                <Button onClick={handleRetry} variant="outline" size="sm" className="mt-2">
                  <RefreshCcw size={14} className="mr-2" /> Retry Connection
                </Button>
              </AlertDescription>
            </Alert>
          )}

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
