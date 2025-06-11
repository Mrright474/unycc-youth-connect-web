
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubscribing(false);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <Card className="bg-unblue text-white border-none">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-unblue-light">
            You've successfully subscribed to our newsletter. You'll receive updates about UNYCC's activities and opportunities.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-unblue text-white border-none">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
          <Mail className="w-8 h-8" />
        </div>
        <CardTitle className="text-2xl font-bold">Stay Connected</CardTitle>
        <p className="text-unblue-light">
          Get the latest updates on UNYCC activities, events, and opportunities delivered to your inbox.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
            />
            <Button 
              type="submit" 
              disabled={isSubscribing}
              className="bg-white text-unblue hover:bg-gray-100 whitespace-nowrap"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-xs text-unblue-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;
